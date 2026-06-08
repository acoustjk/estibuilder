with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "sheet" in line.lower() or "export" in line.lower() or "excel" in line.lower() or "basis" in line.lower():
        if "function" in line or "const" in line:
            print(f"Line {idx+1:4d}: {line.strip()}")
