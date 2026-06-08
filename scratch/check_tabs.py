with open("index.html", "r", encoding="utf-8") as f:
    for idx, line in enumerate(f, 1):
        if "tab" in line.lower() or "menu" in line.lower() or "sidebar" in line.lower():
            if "button" in line or "class=" in line or "id=" in line:
                print(f"{idx}: {line.strip()}")
