with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "ITEM_MASTER_DB" in line or "addPriceItem" in line or "push" in line:
        if "function" in line or "const" in line or "item" in line:
            print(f"Line {idx+1:4d}: {line.strip()}")
