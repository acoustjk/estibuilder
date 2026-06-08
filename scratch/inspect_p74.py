import pypdf
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
reader = pypdf.PdfReader(pdf_path)

# Let's search all pages for "2-2-1-2"
for idx, page in enumerate(reader.pages):
    text = page.extract_text()
    if "2-2-1-2" in text:
        print(f"=== Page {idx} ===")
        print(text)
        break
