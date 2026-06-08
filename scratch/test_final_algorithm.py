import pypdf
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
reader = pypdf.PdfReader(pdf_path)

LABOR_TYPES = ["통신내선공", "통신설비공", "통신외선공", "통신케이블공", "특별인부", "보통인부", "광케이블설치사", "들어내기", "닫기"]

def split_concatenated_token(token):
    parts = token.split('.')
    if len(parts) <= 1:
        try:
            return [float(token)] if token.strip() else []
        except ValueError:
            return []
    
    result = []
    current_int = parts[0]
    
    for idx in range(1, len(parts) - 1):
        middle = parts[idx]
        if len(middle) >= 2:
            fraction = middle[:2]
            next_int = middle[2:]
        else:
            fraction = middle
            next_int = "0"
            
        if not next_int:
            next_int = "0"
            
        try:
            result.append(float(f"{current_int}.{fraction}"))
        except ValueError:
            pass
        current_int = next_int
        
    last_part = parts[-1]
    try:
        result.append(float(f"{current_int}.{last_part}"))
    except ValueError:
        pass
        
    return result

def parse_section(code, text):
    print(f"\n--- Parsing Section {code} ---")
    
    # Split by [해 설] to isolate table text
    table_part = re.split(r'\[\s*해\s*설\s*\]', text)[0]
    
    # Normalize spacing
    normalized = " ".join([l.strip() for l in table_part.split('\n') if l.strip()])
    
    # Slice off the header
    header_match = re.match(r'^\s*(\d+-\d+-\d+(?:-\d+)?)\s*(.*?)(?=규격|단위|공정|통신내선공|통신설비공|통신외선공|통신케이블공|특별인부|보통인부|광케이블설치사|들어내기|닫기)', normalized)
    if header_match:
        header_text = header_match.group(0)
        title = header_match.group(2).strip()
        table_content = normalized[len(header_text):].strip()
    else:
        title = code
        table_content = normalized
        
    print(f"Title: {title}")
    
    # Determine columns in this section
    columns = []
    # Search in header or near header for column names
    header_search_area = normalized[:len(title) + 150]
    for lt in LABOR_TYPES:
        pattern = "".join([re.escape(c) + r"\s*" for c in lt]).strip()
        if re.search(pattern, header_search_area):
            columns.append(lt)
            
    # Fallback columns if none detected
    if not columns:
        if code.startswith("2") or code.startswith("3"):
            columns = ["통신외선공", "보통인부"]
        elif code.startswith("4"):
            columns = ["통신케이블공", "통신내선공"]
        else:
            columns = ["통신설비공", "보통인부"]
            
    print(f"Detected columns ({len(columns)}): {columns}")
    
    # Split by decimal blocks
    group_split = re.split(r'(\b\d*\.\d+(?:\.\d+)*\b)', table_content)
    
    current_specs = []
    current_factors_cols = []
    emitted_items = []
    
    def emit_current():
        nonlocal current_specs, current_factors_cols, emitted_items
        if not current_specs:
            return
        
        num_specs = len(current_specs)
        num_cols = len(current_factors_cols)
        
        if num_cols == 0:
            return
            
        aligned_cols = []
        for col in current_factors_cols:
            if len(col) < num_specs:
                col = col + [0.0] * (num_specs - len(col))
            elif len(col) > num_specs:
                col = col[:num_specs]
            aligned_cols.append(col)
            
        print(f"  Emitting Group: {num_specs} specs, {num_cols} columns")
        for i, spec in enumerate(current_specs):
            for j in range(min(len(columns), num_cols)):
                col_name = columns[j]
                val = aligned_cols[j][i]
                emitted_items.append({
                    "spec": spec,
                    "laborType": col_name,
                    "factor": val
                })
                print(f"    Spec: {spec} | {col_name}: {val}")
                
        current_specs = []
        current_factors_cols = []

    for g_idx in range(0, len(group_split) - 1, 2):
        spec_text = group_split[g_idx]
        factor_token = group_split[g_idx + 1]
        
        # Extract specs with multiplication sign support
        specs = re.findall(r'(\d+\s*[㎜㎛]\s*(?:[×x\*]\s*\d+\s*[㎜㎛])?\s*(?:이\s*하|〃)?|\d+\s*[CP본대열소포트〃]+|\d+\s*회\s*선)', spec_text)
        # Filter out numbers that represent section codes or page numbers
        specs = [s.strip() for s in specs if s.strip() and not re.match(r'^\d+-\d+-\d+$', s.strip())]
        
        if specs:
            emit_current()
            current_specs = specs
            
        # Parse factors
        factors = split_concatenated_token(factor_token)
        
        if current_specs and factors:
            n = len(current_specs)
            if len(factors) % n == 0:
                k = len(factors) // n
                for col_idx in range(k):
                    col_factors = factors[col_idx * n : (col_idx + 1) * n]
                    current_factors_cols.append(col_factors)
            else:
                current_factors_cols.append(factors)
                
    emit_current()
    print(f"Section {code} parsed successfully! Total paired: {len(emitted_items)}")

# Helper to slice text from code position
def run_parse_test(code, page_num):
    text = reader.pages[page_num].extract_text()
    m = re.search(r'\b' + re.escape(code) + r'\b', text)
    if m:
        parse_section(code, text[m.start():])
    else:
        parse_section(code, text)

# Let's test on PVC관
print("=== TESTING PVC관 (page 72) ===")
run_parse_test("2-1-1", 72)

# Let's test on 합성수지관
print("\n=== TESTING 합성수지관 (page 73) ===")
run_parse_test("2-1-3", 73)

# Let's test on 고속철도용 트로프 (page 78)
print("\n=== TESTING 고속철도용 트로프 (page 78) ===")
run_parse_test("2-2-1-2", 78)
