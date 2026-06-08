import pypdf
import re

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
reader = pypdf.PdfReader(pdf_path)

LABOR_TYPES = ["통신내선공", "통신설비공", "통신외선공", "통신케이블공", "특별인부", "보통인부", "광케이블설치사"]
UNITS = ["10m", "〃", "개", "대", "세트", "조", "10개", "회선", "열", "본", "km", "Port"]
unit_pattern = "|".join([re.escape(u) for u in UNITS])

def test_split_page(page_idx):
    page = reader.pages[page_idx]
    text = page.extract_text()
    if not text:
        return
        
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    full_text = " ".join(lines)
    
    # Find all section codes (e.g. 4-3-2) and their positions
    codes_matches = list(re.finditer(r'\b(\d+-\d+-\d+(?:-\d+)?)\b', full_text))
    if not codes_matches:
        print(f"No codes found on page {page_idx+1}")
        return
        
    print(f"\n--- Splitting Page {page_idx+1} ({len(codes_matches)} sections) ---")
    
    for i, cm in enumerate(codes_matches):
        code = cm.group(1)
        start_pos = cm.start()
        # End position is the start of next code, or end of text
        end_pos = codes_matches[i+1].start() if i + 1 < len(codes_matches) else len(full_text)
        
        section_text = full_text[start_pos:end_pos]
        print(f"\nSection: {code}")
        print(f"Snippet: {section_text[:100]}...")
        
        # Detect columns inside this section text
        col_mappings = []
        for lt in LABOR_TYPES:
            pattern = "".join([re.escape(c) + r"\s*" for c in lt]).strip()
            match = re.search(pattern, section_text)
            if match:
                col_mappings.append((match.start(), lt))
        col_mappings.sort()
        columns = [lt for pos, lt in col_mappings]
        print(f"Columns: {columns}")

test_split_page(119)
test_split_page(120)
