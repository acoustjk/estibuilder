with open(r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\scratch\utp_results.txt", "r", encoding="utf-8") as f:
    text = f.read()

target = "PDF PAGE INDEX (0-based): 119"
start = text.find(target)
if start == -1:
    print("Page 119 not found in results!")
    exit(1)

# Find next page index
end = text.find("PDF PAGE INDEX (0-based):", start + len(target))
page_text = text[start:end] if end != -1 else text[start:]

with open(r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\scratch\page_120_raw.txt", "w", encoding="utf-8") as out:
    out.write(page_text)

print("Saved raw page 120 text to page_120_raw.txt")
