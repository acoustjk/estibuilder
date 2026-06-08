with open(r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\scratch\utp_results.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

out_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\scratch\snippets_context.txt"

with open(out_path, "w", encoding="utf-8") as out:
    for idx, line in enumerate(lines):
        if "0.15" in line or "utp" in line.lower() or "4p" in line.lower():
            out.write(f"--- Line {idx} ---\n")
            start = max(0, idx - 10)
            end = min(len(lines), idx + 15)
            for i in range(start, end):
                out.write(f"{i}: {lines[i].strip()}\n")
            out.write("="*40 + "\n\n")

print("Snippets written to snippets_context.txt")
