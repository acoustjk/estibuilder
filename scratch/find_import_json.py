with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "importStateFromJson" in line:
        print(f"Line {idx+1:4d}: {line.strip()}")
