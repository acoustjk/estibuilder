import pdfplumber
import re
import sys

LABOR_TYPES = ['통신내선공', '통신설비공', '통신외선공', '통신케이블공', '특별인부', '보통인부', '광케이블설치사', 
                'H/W시험사', 'S/W시험사', '통신관련기사', '통신관련산업기사', '무선안테나공', '임전기공']

def extract_lines_and_chars_plumber(page):
    char_list = [c for c in page.chars if c['text'].strip()]
    lines = []
    char_list.sort(key=lambda c: c['top'])
    for char in char_list:
        added = False
        for line in lines:
            if abs(char['top'] - line['top']) <= 4.0:
                line['chars'].append(char)
                added = True
                break
        if not added:
            lines.append({'top': char['top'], 'chars': [char]})
    reconstructed_lines = []
    for line in lines:
        line['chars'].sort(key=lambda c: c['x0'])
        line_text = ''
        last_char = None
        for char in line['chars']:
            if last_char:
                if (char['x0'] - last_char['x1']) > 4.0 and line_text and line_text[-1] != ' ':
                    line_text += ' '
            line_text += char['text']
            last_char = char
        reconstructed_lines.append({'top': line['top'], 'text': line_text.strip()})
    reconstructed_lines.sort(key=lambda l: l['top'])
    return reconstructed_lines, char_list

def is_section_header_line(text):
    text_clean = text.strip()
    if not text_clean: return None
    if re.match(r'^\s*[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮]', text_clean): return None
    if '해설' in text_clean or '해 설' in text_clean: return None
    if '품셈 적용' in text_clean or '별도 계상' in text_clean: return None
    match = re.search(r'\b(\d+-\d+-\d+(?:-\d+)?)\b', text_clean)
    if match:
        code = match.group(1)
        if len(text_clean) > 80: return None
        return code
    return None

def clean_value_string(text):
    return text.replace('〃', '').replace('”', '').strip()

with pdfplumber.open('Source/DB_Source_T.pdf') as pdf:
    p = 210
    plumber_page = pdf.pages[p]
    lines, char_list = extract_lines_and_chars_plumber(plumber_page)
    
    page_headers = []
    for line in lines:
        code = is_section_header_line(line['text'])
        if code:
            idx = line['text'].find(code)
            title = line['text'][idx + len(code):].strip()
            title = re.sub(r'^[가-힣\s·\.,]+공사', '', title).strip()
            page_headers.append({'code': code, 'title': title, 'y': line['top']})
            
    tables = plumber_page.find_tables()
    print('Tables found:', len(tables))
    for t_idx, table in enumerate(tables):
        table_top = table.bbox[1]
        table_code = '1-1-21'
        table_title = '인력운반'
        applicable_headers = [h for h in page_headers if h['y'] < table_top]
        if applicable_headers:
            closest_header = max(applicable_headers, key=lambda h: h['y'])
            table_code = closest_header['code']
            table_title = closest_header['title']
        print('Table Code:', table_code)
        
        clean_table_rows = []
        for row in table.rows:
            row_cells = []
            for cell in row.cells:
                if cell is None:
                    row_cells.append('')
                    continue
                x0, y0, x1, y1 = cell[0], cell[1], cell[2], cell[3]
                cell_chars = [c for c in char_list if (x0-0.5) <= c['x0'] <= (x1+0.5) and (y0-0.5) <= c['top'] <= (y1+0.5)]
                cell_chars.sort(key=lambda c: (c['top'], c['x0']))
                cell_text = ''
                last_char = None
                for char in cell_chars:
                    if last_char:
                        if abs(char['top'] - last_char['top']) > 3.0:
                            cell_text += '\n'
                        elif (char['x0'] - last_char['x1']) > 3.0 and cell_text and cell_text[-1] != ' ':
                            cell_text += ' '
                    cell_text += char['text']
                    last_char = char
                row_cells.append(cell_text.strip())
            clean_table_rows.append(row_cells)
            
        row0 = clean_table_rows[0]
        row1 = clean_table_rows[1]
        
        is_grouped_header = False
        process_groups = []
        current_proc = ''
        current_start = -1
        for idx, cell in enumerate(row0):
            if cell.strip() and cell.strip() not in ['공정', '규격', '단위', '종류', '직종']:
                if current_proc:
                    process_groups.append((current_start, idx - 1, current_proc))
                current_proc = cell.strip()
                current_start = idx
        if current_proc:
            process_groups.append((current_start, len(row0) - 1, current_proc))
            
        if process_groups:
            for start, end, name in process_groups:
                for idx in range(start, end + 1):
                    if idx < len(row1) and any(lt in row1[idx].replace(' ', '') for lt in LABOR_TYPES):
                        is_grouped_header = True
                        break
        print('is_grouped_header:', is_grouped_header)
        
        columns_map = {}
        data_start_row = 1
        if is_grouped_header:
            data_start_row = 2
            for col_idx in range(len(row1)):
                labor_text = row1[col_idx].replace('\n', ' ').replace(' ', '')
                matched_labor = None
                for lt in LABOR_TYPES:
                    if lt in labor_text:
                        matched_labor = lt
                        break
                if matched_labor:
                    proc_name = ''
                    for start, end, name in process_groups:
                        if start <= col_idx <= end:
                            proc_name = name
                            break
                    columns_map[col_idx] = (proc_name, matched_labor)
        print('columns_map keys count:', len(columns_map))
        
        name_idx = 0
        spec_idx = -1
        unit_idx = -1
        for idx, cell in enumerate(row0):
            cell_clean = cell.replace(' ', '').replace('\n', '')
            if '단위' in cell_clean:
                unit_idx = idx
            elif '규격' in cell_clean and idx > 0:
                spec_idx = idx
                
        numeric_cols = set()
        for col_idx in range(len(row0)):
            if col_idx == name_idx:
                continue
            float_count = 0
            for r_idx in range(data_start_row, len(clean_table_rows)):
                val_str = clean_table_rows[r_idx][col_idx].strip() if col_idx < len(clean_table_rows[r_idx]) else ''
                val_str = clean_value_string(val_str)
                try:
                    float(val_str.replace(',', ''))
                    float_count += 1
                except ValueError:
                    pass
            if float_count > 0:
                numeric_cols.add(col_idx)
        print('numeric_cols:', numeric_cols)
        
        remaining_cols = []
        for idx in range(len(row0)):
            if idx in columns_map or idx in numeric_cols:
                continue
            if idx not in [name_idx, spec_idx, unit_idx]:
                remaining_cols.append(idx)
        print('remaining_cols:', remaining_cols)
        
        if spec_idx == -1 and remaining_cols:
            spec_idx = remaining_cols.pop(0)
        if unit_idx == -1 and remaining_cols:
            unit_idx = remaining_cols.pop(0)
            
        print('name_idx:', name_idx, 'spec_idx:', spec_idx, 'unit_idx:', unit_idx)
        
        for r_idx in range(data_start_row, len(clean_table_rows)):
            row = clean_table_rows[r_idx]
            name_cell = row[name_idx]
            spec_cell = row[spec_idx] if spec_idx != -1 and spec_idx < len(row) else ''
            unit_cell = row[unit_idx] if unit_idx != -1 and unit_idx < len(row) else ''
            print(f'Row {r_idx}: name={repr(name_cell)}, spec={repr(spec_cell)}, unit={repr(unit_cell)}')
            
            names_split = name_cell.split('\n')
            specs_split = spec_cell.split('\n')
            
            max_lines = max(len(names_split), len(specs_split))
            print(f'  names_split={names_split}, specs_split={specs_split}, max_lines={max_lines}')
            
            col_factors = {}
            for col_idx in columns_map.keys():
                if col_idx < len(row):
                    val_str = row[col_idx]
                    vals = val_str.split('\n')
                    vals += ['0'] * (max_lines - len(vals))
                    col_factors[col_idx] = vals
            print(f'  col_factors for col 3 (통신관련산업기사): {col_factors.get(3)}')
            
            for sub_idx in range(max_lines):
                sub_name = clean_value_string(names_split[sub_idx])
                sub_spec = clean_value_string(specs_split[sub_idx])
                print(f'    sub_idx {sub_idx}: sub_name={repr(sub_name)}, sub_spec={repr(sub_spec)}')
                
                # Check for installation factors
                for col_idx, (proc_name, labor_type) in columns_map.items():
                    val_str = clean_value_string(col_factors[col_idx][sub_idx])
                    try:
                        val = float(val_str)
                    except ValueError:
                        val = 0.0
                    if val > 0.0:
                        print(f'      ADD: proc_name={proc_name}, labor_type={labor_type}, val={val}')
