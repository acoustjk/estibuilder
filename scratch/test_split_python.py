import pypdf
import re

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
reader = pypdf.PdfReader(pdf_path)

page = reader.pages[120]
text = page.extract_text()
full_text = " ".join([l.strip() for l in text.split('\n') if l.strip()])

# Find all code matches
raw_matches = re.finditer(r'\b(\d+-\d+-\d+(?:-\d+)?)\b', full_text)
clean_matches = []

for m in raw_matches:
    start = m.start()
    # Check 3 characters before the match start
    before = full_text[max(0, start-3):start]
    # If any quote is present in the preceding characters, skip it
    if any(q in before for q in ['“', '"', "'", '‘', '”', '’']):
        print(f"Skipping reference: '{m.group(1)}' (preceded by '{before}')")
        continue
    clean_matches.append(m)

print("\n--- Clean Matches ---")
for m in clean_matches:
    print(f"Main Section Code: '{m.group(1)}' at index {m.start()}")
