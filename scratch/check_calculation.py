with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

out_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\scratch\calculation_context.txt"

lines = content.split('\n')
with open(out_path, "w", encoding="utf-8") as out:
    for idx, line in enumerate(lines, 1):
        if "laborCost" in line or "laborFactor" in line or "laborType" in line:
            if "function" in line or "const" in line or "let" in line or "if" in line or "for" in line or "=" in line or "return" in line:
                out.write(f"{idx}: {line.strip()}\n")

print("Written calculation context to calculation_context.txt")
