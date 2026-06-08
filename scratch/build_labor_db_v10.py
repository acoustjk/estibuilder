import pdfplumber
import json
import re
import os

pdf_path = r"Source/DB_Source_T.pdf"
output_json = r"standard_labor_db.json"

LABOR_TYPES = ["통신내선공", "통신설비공", "통신외선공", "통신케이블공", "특별인부", "보통인부", "광케이블설치사", 
                "H/W시험사", "S/W시험사", "통신관련기사", "통신관련산업기사", "무선안테나공", "임전기공"]

def extract_lines_and_chars_plumber(page):
    char_list = [c for c in page.chars if c["text"].strip()]
    
    # Reconstruct lines
    lines = []
    char_list.sort(key=lambda c: c["top"])
    for char in char_list:
        added = False
        for line in lines:
            if abs(char["top"] - line["top"]) <= 4.0:
                line["chars"].append(char)
                added = True
                break
        if not added:
            lines.append({
                "top": char["top"],
                "chars": [char]
            })
            
    reconstructed_lines = []
    for line in lines:
        line["chars"].sort(key=lambda c: c["x0"])
        line_text = ""
        last_char = None
        for char in line["chars"]:
            if last_char:
                if (char["x0"] - last_char["x1"]) > 4.0 and line_text and line_text[-1] != " ":
                    line_text += " "
            line_text += char["text"]
            last_char = char
        reconstructed_lines.append({
            "top": line["top"],
            "text": line_text.strip()
        })
        
    reconstructed_lines.sort(key=lambda l: l["top"])
    return reconstructed_lines, char_list

def is_section_header_line(text):
    text_clean = text.strip()
    if not text_clean:
        return None
    # Skip circular numbers (explanation list items)
    if re.match(r'^\s*[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮]', text_clean):
        return None
    if "해설" in text_clean or "해 설" in text_clean:
        return None
    if "품셈 적용" in text_clean or "별도 계상" in text_clean:
        return None
    
    # Look for 3-part or 4-part code, e.g. 7-11-1 or 7-11-2-1
    match = re.search(r'\b(\d+-\d+-\d+(?:-\d+)?)\b', text_clean)
    if match:
        code = match.group(1)
        # Exclude if it's in a long descriptive sentence
        if len(text_clean) > 80:
            return None
        return code
    return None

def clean_value_string(text):
    # Remove ditto marks and whitespace
    text = text.replace("〃", "").replace("”", "").strip()
    return text

def main():
    print("Starting robust standard labor PDF extraction (v10)...")
    
    parsed_items = []
    seen_keys = set()
    
    active_code = "1-1-21"
    active_title = "인력운반 및 적상․하 기준"
    
    with pdfplumber.open(pdf_path) as pdf:
        total_pages = len(pdf.pages)
        print(f"Total pages in PDF: {total_pages}")
        
        for p in range(30, total_pages):
            plumber_page = pdf.pages[p]
            
            # Extract clean characters and lines using plumber-only coordinate logic
            lines, char_list = extract_lines_and_chars_plumber(plumber_page)
            
            # Find section headers on this page
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
                        "y": line["top"]
                    })
            
            tables = plumber_page.find_tables()
            
            if not tables and page_headers:
                # Page has a header but no tables, update active code/title
                closest = min(page_headers, key=lambda h: h["y"])
                active_code = closest["code"]
                active_title = closest["title"]
                
            for table_idx, table in enumerate(tables):
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
                
                # Extract cell text cleanly using plumber-only coordinates
                clean_table_rows = []
                for row in table.rows:
                    row_cells = []
                    for cell in row.cells:
                        if cell is None:
                            row_cells.append("")
                            continue
                        
                        x0, y0, x1, y1 = cell[0], cell[1], cell[2], cell[3]
                        
                        cell_chars = [c for c in char_list if (x0 - 0.5) <= c["x0"] <= (x1 + 0.5) and (y0 - 0.5) <= c["top"] <= (y1 + 0.5)]
                        cell_chars.sort(key=lambda c: (c["top"], c["x0"]))
                        
                        cell_text = ""
                        last_char = None
                        for char in cell_chars:
                            if last_char:
                                if abs(char["top"] - last_char["top"]) > 3.0:
                                    cell_text += "\n"
                                elif (char["x0"] - last_char["x1"]) > 3.0 and cell_text and cell_text[-1] != " ":
                                    cell_text += " "
                            cell_text += char["text"]
                            last_char = char
                        row_cells.append(cell_text.strip())
                    clean_table_rows.append(row_cells)
                
                if len(clean_table_rows) < 2:
                    continue
                
                # Resolve ditto marks ("〃", "〃〃") in the table cells
                last_values = [""] * len(clean_table_rows[0])
                for r_idx, row in enumerate(clean_table_rows):
                    for col_idx, cell in enumerate(row):
                        cell_clean = cell.strip()
                        if cell_clean in ["〃", "〃〃", "”", "””", "〃〃〃"]:
                            row[col_idx] = last_values[col_idx]
                        elif "〃" in cell_clean:
                            row[col_idx] = cell_clean.replace("〃", "").strip()
                        
                        if row[col_idx].strip():
                            last_values[col_idx] = row[col_idx].strip()
                
                # Parse column mapping from table header
                row0 = clean_table_rows[0]
                row1 = clean_table_rows[1] if len(clean_table_rows) > 1 else []
                
                is_grouped_header = False
                process_groups = []
                current_proc = ""
                current_start = -1
                
                for idx, cell in enumerate(row0):
                    if cell.strip() and cell.strip() not in ["공정", "규격", "단위", "종류", "직종"]:
                        if current_proc:
                            process_groups.append((current_start, idx - 1, current_proc))
                        current_proc = cell.strip()
                        current_start = idx
                if current_proc:
                    process_groups.append((current_start, len(row0) - 1, current_proc))
                    
                if process_groups:
                    for start, end, name in process_groups:
                        for idx in range(start, end + 1):
                            if idx < len(row1) and any(lt in row1[idx].replace(" ", "") for lt in LABOR_TYPES):
                                is_grouped_header = True
                                break
                
                columns_map = {}
                data_start_row = 1
                
                if is_grouped_header:
                    data_start_row = 2
                    for col_idx in range(len(row1)):
                        labor_text = row1[col_idx].replace("\n", " ").replace(" ", "")
                        matched_labor = None
                        for lt in LABOR_TYPES:
                            if lt in labor_text:
                                matched_labor = lt
                                break
                        if matched_labor:
                            proc_name = ""
                            for start, end, name in process_groups:
                                if start <= col_idx <= end:
                                    proc_name = name
                                    break
                            columns_map[col_idx] = (proc_name, matched_labor)
                else:
                    for col_idx, cell in enumerate(row0):
                        labor_text = cell.replace("\n", " ").replace(" ", "")
                        matched_labor = None
                        for lt in LABOR_TYPES:
                            if lt in labor_text:
                                matched_labor = lt
                                break
                        if matched_labor:
                            columns_map[col_idx] = ("", matched_labor)
                
                # If no labor columns detected, look for "직종" column to map to row value
                job_col_idx = -1
                for idx, cell in enumerate(row0):
                    if "직종" in cell.replace(" ", ""):
                        job_col_idx = idx
                        break
                        
                # Determine Name, Spec, Unit indices dynamically
                name_idx = 0
                spec_idx = -1
                unit_idx = -1
                
                # Check for explicit headers
                for idx, cell in enumerate(row0):
                    cell_clean = cell.replace(" ", "").replace("\n", "")
                    if "단위" in cell_clean:
                        unit_idx = idx
                    elif "규격" in cell_clean and idx > 0:
                        spec_idx = idx
                        
                # Detect which columns actually contain numeric factors in the data rows
                numeric_cols = set()
                for col_idx in range(len(row0)):
                    if col_idx == name_idx or col_idx == job_col_idx:
                        continue
                    float_count = 0
                    for r_idx in range(data_start_row, len(clean_table_rows)):
                        val_str = clean_table_rows[r_idx][col_idx].strip() if col_idx < len(clean_table_rows[r_idx]) else ""
                        # Strip ditto marks
                        val_str = clean_value_string(val_str)
                        try:
                            float(val_str.replace(",", ""))
                            float_count += 1
                        except ValueError:
                            pass
                    if float_count > 0:
                        numeric_cols.add(col_idx)
                        
                # Fallback for remaining columns
                remaining_cols = []
                for idx in range(len(row0)):
                    if idx in columns_map or idx == job_col_idx or idx in numeric_cols:
                        continue
                    if idx not in [name_idx, spec_idx, unit_idx]:
                        remaining_cols.append(idx)
                        
                if spec_idx == -1 and remaining_cols:
                    spec_idx = remaining_cols.pop(0)
                if unit_idx == -1 and remaining_cols:
                    unit_idx = remaining_cols.pop(0)
                
                # Category
                first_digit = table_code.split("-")[0]
                category = "labor" if first_digit == "1" else "pipe" if first_digit in ["2", "3"] else "cable" if first_digit == "4" else "device"
                
                # Default unit
                default_unit = "본" if "PVC" in table_title or "배관" in table_title else "m" if "케이블" in table_title or "배선" in table_title else "개"
                
                # Loop through data rows
                for r_idx in range(data_start_row, len(clean_table_rows)):
                    row = clean_table_rows[r_idx]
                    if not row or len(row) <= name_idx or not row[name_idx].strip():
                        continue
                    
                    name_cell = row[name_idx]
                    spec_cell = row[spec_idx] if spec_idx != -1 and spec_idx < len(row) else ""
                    unit_cell = row[unit_idx] if unit_idx != -1 and unit_idx < len(row) else ""
                    
                    names_split = name_cell.split("\n")
                    specs_split = spec_cell.split("\n")
                    units_split = unit_cell.split("\n")
                    
                    max_lines = max(len(names_split), len(specs_split))
                    
                    names_split += [names_split[-1]] * (max_lines - len(names_split))
                    specs_split += [specs_split[-1] if specs_split else ""] * (max_lines - len(specs_split))
                    units_split += [units_split[-1] if units_split else ""] * (max_lines - len(units_split))
                    
                    if columns_map:
                        col_factors = {}
                        for col_idx in columns_map.keys():
                            if col_idx < len(row):
                                val_str = row[col_idx]
                                vals = val_str.split("\n")
                                vals += ["0"] * (max_lines - len(vals))
                                col_factors[col_idx] = vals
                                
                        for sub_idx in range(max_lines):
                            sub_name = clean_value_string(names_split[sub_idx])
                            sub_spec = clean_value_string(specs_split[sub_idx])
                            sub_unit = clean_value_string(units_split[sub_idx]) or default_unit
                            
                            if not sub_name or sub_name in ["공정", "규격", "단위", "종류", "직종"]:
                                continue
                                
                            process_labors = {}
                            for col_idx, (proc_name, labor_type) in columns_map.items():
                                val_str = clean_value_string(col_factors[col_idx][sub_idx])
                                try:
                                    val = float(val_str)
                                except ValueError:
                                    val = 0.0
                                if val > 0.0:
                                    if proc_name not in process_labors:
                                        process_labors[proc_name] = {}
                                    process_labors[proc_name][labor_type] = val
                                    
                            for proc_name, labors in process_labors.items():
                                item_name = sub_name
                                if proc_name:
                                    item_name = f"{sub_name} [{proc_name}]"
                                    
                                item_key = (table_code, item_name, sub_spec)
                                if item_key in seen_keys:
                                    continue
                                seen_keys.add(item_key)
                                
                                keywords = [item_name, sub_spec, table_title]
                                clean_keywords = list(set([k.lower().strip() for k in keywords if k and len(k.strip()) > 1]))
                                
                                parsed_items.append({
                                    "code": f"통신 {table_code}",
                                    "name": item_name,
                                    "spec": sub_spec,
                                    "unit": sub_unit,
                                    "labors": labors,
                                    "category": category,
                                    "page": p + 1,
                                    "keywords": clean_keywords
                                })
                    elif job_col_idx != -1:
                        job_cell = row[job_col_idx]
                        jobs_split = job_cell.split("\n")
                        jobs_split += [jobs_split[-1]] * (max_lines - len(jobs_split))
                        
                        factor_cols = []
                        for idx, cell in enumerate(row0):
                            if idx not in [name_idx, spec_idx, unit_idx, job_col_idx] and cell.strip():
                                factor_cols.append((idx, cell.strip()))
                                
                        col_factors = {}
                        for col_idx, proc_name in factor_cols:
                            if col_idx < len(row):
                                val_str = row[col_idx]
                                vals = val_str.split("\n")
                                vals += ["0"] * (max_lines - len(vals))
                                col_factors[col_idx] = vals
                                
                        for sub_idx in range(max_lines):
                            sub_name = clean_value_string(names_split[sub_idx])
                            sub_spec = clean_value_string(specs_split[sub_idx])
                            sub_unit = clean_value_string(units_split[sub_idx]) or default_unit
                            sub_job = clean_value_string(jobs_split[sub_idx])
                            
                            if not sub_name or sub_name in ["공정", "규격", "단위", "종류", "직종"]:
                                continue
                                
                            matched_labor = None
                            for lt in LABOR_TYPES:
                                if lt in sub_job:
                                    matched_labor = lt
                                    break
                            if not matched_labor:
                                matched_labor = "보통인부"
                                
                            for col_idx, proc_name in factor_cols:
                                val_str = clean_value_string(col_factors[col_idx][sub_idx])
                                try:
                                    val = float(val_str)
                                except ValueError:
                                    val = 0.0
                                    
                                if val > 0.0:
                                    # If the process name is a spec (e.g. 50V, 120V)
                                    # store it in spec! Otherwise add it to item_name.
                                    item_spec = sub_spec
                                    item_name = sub_name
                                    
                                    # Check if proc_name represents a spec (contains digits and units, or is a code)
                                    if re.search(r'\d', proc_name) or proc_name in ["소형", "대형", "중형"]:
                                        if item_spec:
                                            item_spec = f"{item_spec} ({proc_name})"
                                        else:
                                            item_spec = proc_name
                                    else:
                                        item_name = f"{sub_name} [{proc_name}]"
                                        
                                    item_key = (table_code, item_name, item_spec)
                                    if item_key in seen_keys:
                                        continue
                                    seen_keys.add(item_key)
                                    
                                    keywords = [item_name, item_spec, table_title]
                                    clean_keywords = list(set([k.lower().strip() for k in keywords if k and len(k.strip()) > 1]))
                                    
                                    parsed_items.append({
                                        "code": f"통신 {table_code}",
                                        "name": item_name,
                                        "spec": item_spec,
                                        "unit": sub_unit,
                                        "labors": {matched_labor: val},
                                        "category": category,
                                        "page": p + 1,
                                        "keywords": clean_keywords
                                    })
            if p % 20 == 0:
                print(f"Processed page {p}/{total_pages}...")
                
    # Save the database
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(parsed_items, f, ensure_ascii=False, indent=4)
        
    print(f"\nExtraction complete! Successfully parsed {len(parsed_items)} standard labor items.")
    print(f"Clean database saved to {output_json}")

if __name__ == '__main__':
    main()
