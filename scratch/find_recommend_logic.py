with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "recommend" in line or "recommendLabor" in line or "confirmAddPriceItem" in line or "addLabor" in line:
        print(f"Line {idx+1:4d}: {line.strip()}")
