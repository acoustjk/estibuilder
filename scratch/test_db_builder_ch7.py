import pypdf
import pdfplumber
import json
import re

LABOR_TYPES = ["통신내선공", "통신설비공", "통신외선공", "통신케이블공", "특별인부", "보통인부", "광케이블설치사", 
                "H/W시험사", "S/W시험사", "통신관련기사", "통신관련산업기사", "무선안테나공", "특별인부", "보통인부"]

def extract_lines_and_chars(pypdf_page, page_height):
    char_list = []
    def visitor(text, cm, tm, fontDict, fontSize):
        if not text.strip():
            return
        x_t, y_t = tm[4], tm[5]
        x_page = cm[0] * x_t + cm[2] * y_t + cm[4]
        y_page = cm[1] * x_t + cm[3] * y_t + cm[5]
        y_plumber = page_height - y_page
        char_list.append({
            "text": text,
            "x": x_page,
            "y": y_plumber
        })
    pypdf_page.extract_text(visitor_text=visitor)
    
    # Reconstruct lines
    lines = []
    char_list.sort(key=lambda c: c["y"])
    for char in char_list:
        added = False
        for line in lines:
            if abs(char["y"] - line["y"]) <= 4.0:
                line["chars"].append(char)
                added = True
                break
        if not added:
            lines.append({
                "y": char["y"],
                "chars": [char]
            })
            
    reconstructed_lines = []
    for line in lines:
        line["chars"].sort(key=lambda c: c["x"])
        line_text = ""
        last_char = None
        for char in line["chars"]:
            if last_char:
                if (char["x"] - last_char["x"]) > 5.0 and line_text[-1] != " ":
                    line_text += " "
            line_text += char["text"]
            last_char = char
        reconstructed_lines.append({
            "y": line["y"],
            "text": line_text.strip()
        })
        
    reconstructed_lines.sort(key=lambda l: l["y"])
    return reconstructed_lines, char_list

def is_section_header_line(text):
    text_clean = text.strip()
    if not text_clean:
        return None
    if re.match(r'^\s*[①②③④⑤⑥⑦⑧⑨⑩]', text_clean):
        return None
    if "해설" in text_clean or "해 설" in text_clean:
        return None
    if "품셈 적용" in text_clean or "별도 계상" in text_clean:
        return None
    
    match = re.search(r'\b(\d+-\d+-\d+(?:-\d+)?)\b', text_clean)
    if match:
        code = match.group(1)
        if len(text_clean) > 80:
            return None
        return code
    return None

def test():
    reader = pypdf.PdfReader("Source/DB_Source_T.pdf")
    pages_to_test = range(210, 221)
    
    parsed_items = []
    
    with pdfplumber.open("Source/DB_Source_T.pdf") as pdf:
        active_code = "7-11-1"
        active_title = "방송국 설비"
        
        for p in pages_to_test:
            pypdf_page = reader.pages[p]
            page_height = float(pypdf_page.mediabox.height)
            
            # Extract clean characters and lines
            lines, char_list = extract_lines_and_chars(pypdf_page, page_height)
            
            # Find section headers
            page_headers = []
            for line in lines:
                code = is_section_header_line(line["text"])
                if code:
                    idx = line["text"].find(code)
                    title = line["text"][idx + len(code):].strip()
                    title = re.sub(r'^[가-힣\s·\.,]+공사', '', title).strip()
                    page_headers.append({
                        "code": code,
                        "title": title,
                        "y": line["y"]
                    })
            
            plumber_page = pdf.pages[p]
            tables = plumber_page.find_tables()
            
            for table in tables:
                # Map table to section header
                table_top = table.bbox[1]
                table_code = active_code
                table_title = active_title
                
                # Find the closest header above the table
                applicable_headers = [h for h in page_headers if h["y"] < table_top]
                if applicable_headers:
                    closest_header = max(applicable_headers, key=lambda h: h["y"])
                    table_code = closest_header["code"]
                    table_title = closest_header["title"]
                    active_code = table_code
                    active_title = table_title
                
                # Extract cell text cleanly using coordinate visitor mapping
                clean_table_rows = []
                for row in table.rows:
                    row_cells = []
                    for cell in row.cells:
                        if cell is None:
                            row_cells.append("")
                            continue
                        
                        x0 = getattr(cell, "x0", cell[0] if isinstance(cell, (list, tuple)) else 0)
                        y0 = getattr(cell, "top", cell[1] if isinstance(cell, (list, tuple)) else 0)
                        x1 = getattr(cell, "x1", cell[2] if isinstance(cell, (list, tuple)) else 0)
                        y1 = getattr(cell, "bottom", cell[3] if isinstance(cell, (list, tuple)) else 0)
                        
                        cell_chars = []
                        for char in char_list:
                            if (x0 - 0.5) <= char["x"] <= (x1 + 0.5) and (y0 - 0.5) <= char["y"] <= (y1 + 0.5):
                                cell_chars.append(char)
                        
                        cell_chars.sort(key=lambda c: (c["y"], c["x"]))
                        
                        cell_text = ""
                        last_char = None
                        for char in cell_chars:
                            if last_char:
                                if abs(char["y"] - last_char["y"]) > 3.0:
                                    cell_text += "\n"
                                elif (char["x"] - last_char["x"]) > 5.0 and cell_text[-1] != " ":
                                    cell_text += " "
                            cell_text += char["text"]
                            last_char = char
                        row_cells.append(cell_text.strip())
                    clean_table_rows.append(row_cells)
                
                if len(clean_table_rows) < 2:
                    continue
                
                # Parse column mapping from header
                # We need to look at Row 0 and Row 1
                row0 = clean_table_rows[0]
                row1 = clean_table_rows[1] if len(clean_table_rows) > 1 else []
                
                # Detect if row0 contains process groups (e.g. 설치, 점검, 조정, 시험)
                # If a cell in row0 has a value, but row1 also has values below it, it's a grouped header.
                is_grouped_header = False
                process_groups = [] # list of (start_idx, end_idx, process_name)
                
                current_proc = ""
                current_start = -1
                
                for idx, cell in enumerate(row0):
                    if cell.strip() and cell.strip() not in ["공정", "규격", "단위"]:
                        if current_proc:
                            process_groups.append((current_start, idx - 1, current_proc))
                        current_proc = cell.strip()
                        current_start = idx
                if current_proc:
                    process_groups.append((current_start, len(row0) - 1, current_proc))
                    
                if process_groups:
                    # check if row1 has any text in those columns
                    for start, end, name in process_groups:
                        for idx in range(start, end + 1):
                            if idx < len(row1) and row1[idx].strip():
                                is_grouped_header = True
                                break
                
                # Normalize column headers
                # We want columns_map = {col_idx: (process_name, labor_type)}
                columns_map = {}
                data_start_row = 1
                
                if is_grouped_header:
                    data_start_row = 2
                    # Map each column to its process and labor type
                    for col_idx in range(len(row1)):
                        labor_text = row1[col_idx].replace("\n", " ").replace(" ", "")
                        matched_labor = None
                        for lt in LABOR_TYPES:
                            if lt in labor_text:
                                matched_labor = lt
                                break
                        
                        if matched_labor:
                            # Find which process group this column belongs to
                            proc_name = ""
                            for start, end, name in process_groups:
                                if start <= col_idx <= end:
                                    proc_name = name
                                    break
                            columns_map[col_idx] = (proc_name, matched_labor)
                else:
                    # Flat header in row0
                    for col_idx, cell in enumerate(row0):
                        labor_text = cell.replace("\n", " ").replace(" ", "")
                        matched_labor = None
                        for lt in LABOR_TYPES:
                            if lt in labor_text:
                                matched_labor = lt
                                break
                        if matched_labor:
                            columns_map[col_idx] = ("", matched_labor)
                
                # Loop through data rows
                for r_idx in range(data_start_row, len(clean_table_rows)):
                    row = clean_table_rows[r_idx]
                    if not row or not row[0].strip():
                        continue
                    
                    # If all factors are empty/hyphen, skip
                    factors_exist = False
                    for col_idx in columns_map.keys():
                        if col_idx < len(row) and row[col_idx].strip() not in ["", "-", "0"]:
                            factors_exist = True
                            break
                    if not factors_exist:
                        continue
                        
                    name_cell = row[0]
                    spec_cell = row[1] if len(row) > 1 else ""
                    unit_cell = row[2] if len(row) > 2 else "대"
                    
                    # Split multi-line cells
                    names_split = name_cell.split("\n")
                    specs_split = spec_cell.split("\n")
                    units_split = unit_cell.split("\n")
                    
                    max_lines = max(len(names_split), len(specs_split))
                    
                    # Pad lists to max_lines
                    names_split += [names_split[-1]] * (max_lines - len(names_split))
                    specs_split += [specs_split[-1] if specs_split else ""] * (max_lines - len(specs_split))
                    units_split += [units_split[-1] if units_split else "대"] * (max_lines - len(units_split))
                    
                    # Extract factors for each line
                    # plumber cell content might have factors separated by newlines, e.g. '0.40\n0.43'
                    col_factors = {}
                    for col_idx in columns_map.keys():
                        if col_idx < len(row):
                            val_str = row[col_idx]
                            vals = val_str.split("\n")
                            vals += ["0"] * (max_lines - len(vals))
                            col_factors[col_idx] = vals
                            
                    for sub_idx in range(max_lines):
                        sub_name = names_split[sub_idx].strip()
                        sub_spec = specs_split[sub_idx].strip()
                        sub_unit = units_split[sub_idx].strip()
                        
                        if not sub_name:
                            continue
                            
                        # Process group mapping
                        # We group labors by process name (e.g. 설치, 시험 및 측정)
                        process_labors = {} # {process_name: {labor_type: factor_val}}
                        
                        for col_idx, (proc_name, labor_type) in columns_map.items():
                            val_str = col_factors[col_idx][sub_idx].strip()
                            # Parse float
                            try:
                                val = float(val_str)
                            except ValueError:
                                val = 0.0
                                
                            if val > 0.0:
                                if proc_name not in process_labors:
                                    process_labors[proc_name] = {}
                                process_labors[proc_name][labor_type] = val
                                
                        # Emit database items
                        for proc_name, labors in process_labors.items():
                            item_name = sub_name
                            if proc_name:
                                item_name = f"{sub_name} [{proc_name}]"
                                
                            parsed_items.append({
                                "code": f"통신 {table_code}",
                                "name": item_name,
                                "spec": sub_spec,
                                "unit": sub_unit,
                                "labors": labors,
                                "category": "device",
                                "page": p + 1,
                                "keywords": [item_name.lower(), sub_spec.lower()]
                            })
                            
        # Print summary
        print(f"\nSuccessfully parsed {len(parsed_items)} items for Chapter 7.")
        with open("scratch/db_ch7_output.json", "w", encoding="utf-8") as f:
            json.dump(parsed_items, f, ensure_ascii=False, indent=4)
        print("Results written to scratch/db_ch7_output.json")

if __name__ == '__main__':
    test()
