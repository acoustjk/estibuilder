import pypdf
import re

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
reader = pypdf.PdfReader(pdf_path)

page = reader.pages[119]
text = page.extract_text()
full_text = " ".join([l.strip() for l in text.split('\n') if l.strip()])

print("--- Text on Page 120 ---")
print(full_text[:500])

# Match codes that are NOT preceded by quotes
pattern_all = r'\b(\d+-\d+-\d+(?:-\d+)?)\b'
pattern_clean = r'(?<![“\"\'‘])\b(\d+-\d+-\d+(?:-\d+)?)\b'

print("\n--- All Matches ---")
for m in re.finditer(pattern_all, full_text):
    print(f"Matched '{m.group(1)}' at {m.start()} (char before: '{full_text[max(0, m.start()-2):m.start()]}')")

print("\n--- Clean Matches ---")
for m in re.finditer(pattern_clean, full_text):
    print(f"Matched '{m.group(1)}' at {m.start()}")
