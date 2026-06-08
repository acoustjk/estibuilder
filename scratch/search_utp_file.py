import pypdf

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
out_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\scratch\utp_results.txt"

reader = pypdf.PdfReader(pdf_path)
print(f"Total pages: {len(reader.pages)}")

matches = []
# We will search for keywords like "UTP", "4P", "90"
# Also we can write the exact text of page indices 80 to 120 (which covers page 90 in the PDF, accounting for offset)
# Let's extract pages 80 to 120 so we can read them completely and find the exact table.

with open(out_path, "w", encoding="utf-8") as out:
    out.write("=== SEARCH RESULTS ===\n")
    for idx, page in enumerate(reader.pages):
        text = page.extract_text()
        if not text:
            continue
        
        # Check if the page has "UTP" or "4P" or mentions page number "90" (or "- 90 -" or similar)
        if "utp" in text.lower() or "4p" in text.lower() or "- 90 -" in text or " 90 " in text:
            out.write(f"\n\n=========================================\n")
            out.write(f"PDF PAGE INDEX (0-based): {idx} (Page Number: {idx + 1})\n")
            out.write(f"=========================================\n")
            out.write(text)
            
            # Let's also keep track of matches
            matches.append(idx + 1)

print(f"Done! Written {len(matches)} matching pages to {out_path}")
