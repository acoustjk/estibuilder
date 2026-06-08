import pypdf
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
reader = pypdf.PdfReader(pdf_path)
page = reader.pages[73]
text = page.extract_text()

print("=== RAW TEXT PAGE 73 ===")
print(text)
