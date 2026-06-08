import pypdf
import re

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
reader = pypdf.PdfReader(pdf_path)

LABOR_TYPES = ["통신내선공", "통신설비공", "통신외선공", "통신케이블공", "특별인부", "보통인부", "광케이블설치사"]

page = reader.pages[120]
text = page.extract_text()
full_text = " ".join([l.strip() for l in text.split('\n') if l.strip()])

print("--- Full Text ---")
print(full_text[:600])

col_mappings = []
for lt in LABOR_TYPES:
    pattern = "".join([re.escape(c) + r"\s*" for c in lt]).strip()
    match = re.search(pattern, full_text)
    if match:
        col_mappings.append((match.start(), lt, match.group(0)))

col_mappings.sort()
print("\n--- Detected Columns ---")
for pos, lt, matched_str in col_mappings:
    print(f"Position {pos}: {lt} (matched: '{matched_str}')")
