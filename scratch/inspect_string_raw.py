import pypdf
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
reader = pypdf.PdfReader(pdf_path)
page = reader.pages[72]
text = page.extract_text()

# Find the collapsed number string in text
for line in text.split("\n"):
    if "0.06" in line or "0.06" in line:
        print("=== Matching Line ===")
        print(repr(line))
        print("\n=== Characters in line ===")
        for i, char in enumerate(line):
            print(f"{i:3d}: {repr(char)} (U+{ord(char):04X})")
