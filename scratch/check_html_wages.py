with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

out_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\scratch\html_wages_context.txt"
with open(out_path, "w", encoding="utf-8") as out:
    for idx, line in enumerate(lines, 1):
        if "내선공" in line or "설비공" in line or "특별인부" in line or "노임" in line or "단가" in line:
            if "input" in line or "label" in line or "select" in line or "id=" in line or "option" in line:
                out.write(f"{idx}: {line.strip()}\n")

print("Done")
