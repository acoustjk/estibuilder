import json

json_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor_db.json"

with open(json_path, "r", encoding="utf-8") as f:
    db = json.load(f)

print(f"Total items in DB: {len(db)}")

matches = [item for item in db if "4-3-1" in item["code"] or "꼬임" in item["name"]]
print(f"Found {len(matches)} matches:")
for m in matches:
    print(json.dumps(m, ensure_ascii=False, indent=2))
