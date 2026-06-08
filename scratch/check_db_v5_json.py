import json

json_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor_db.json"

with open(json_path, "r", encoding="utf-8") as f:
    db = json.load(f)

print(f"Total items in DB: {len(db)}")

pvc_items = [item for item in db if "2-1-1" in item["code"]]
print(f"PVC items found: {len(pvc_items)}")
for item in pvc_items[:15]:
    print(f"Code: {item['code']}, Name: {item['name']}, Labor: {item['laborType']}, Factor: {item['laborFactor']}")
