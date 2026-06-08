import pdfplumber
import re
import sys

with pdfplumber.open('Source/DB_Source_T.pdf') as pdf:
    page = pdf.pages[219]
    table = page.find_tables()[0]
    clean_table_rows = []
    for row in table.rows:
        row_cells = []
        for cell in row.cells:
            if cell is None:
                row_cells.append('')
                continue
            x0, y0, x1, y1 = cell[0], cell[1], cell[2], cell[3]
            cell_chars = [c for c in page.chars if (x0-0.5) <= c['x0'] <= (x1+0.5) and (y0-0.5) <= c['top'] <= (y1+0.5)]
            cell_chars.sort(key=lambda c: (c['top'], c['x0']))
            cell_text = ''.join([c['text'] for c in cell_chars])
            row_cells.append(cell_text.strip())
        clean_table_rows.append(row_cells)
    
    row0 = clean_table_rows[0]
    job_col_idx = 1
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
        if col_idx == name_idx or col_idx == job_col_idx:
            continue
        float_count = 0
        for r_idx in range(1, len(clean_table_rows)):
            val_str = clean_table_rows[r_idx][col_idx].strip() if col_idx < len(clean_table_rows[r_idx]) else ''
            val_str = val_str.replace('〃', '').replace('”', '').replace('\n', ' ').strip()
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
        if idx == job_col_idx or idx in numeric_cols:
            continue
        if idx not in [name_idx, spec_idx, unit_idx]:
            remaining_cols.append(idx)
    print('remaining_cols:', remaining_cols)
