with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

import re
lines = content.split('\n')
out_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\scratch\recommendation_logic.txt"

with open(out_path, "w", encoding="utf-8") as out:
    for idx, line in enumerate(lines, 1):
        if "recommend" in line.lower() or "suggest" in line.lower() or "match" in line.lower() or "search" in line.lower():
            if "function" in line or "const" in line or "let" in line or "if" in line or "for" in line or "=" in line:
                out.write(f"{idx}: {line.strip()}\n")

print("Saved matching logic contexts to recommendation_logic.txt")
