import pypdf

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
reader = pypdf.PdfReader(pdf_path)

print(f"Total pages: {len(reader.pages)}")

# Search for "UTP" or "4P" in all pages
matches = []
for idx, page in enumerate(reader.pages):
    text = page.extract_text()
    if not text:
        continue
    if "UTP" in text or "4P" in text or "케이블" in text and "0.15" in text:
        # Find page title if possible (e.g. section numbers like 4-x-x)
        matches.append((idx + 1, text[:300].replace('\n', ' ')))

print(f"Found {len(matches)} potential pages:")
for page_num, snippet in matches[:20]:
    print(f"Page {page_num}: {snippet}...")
