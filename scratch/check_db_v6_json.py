import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

json_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor_db.json"

with open(json_path, "r", encoding="utf-8") as f:
    db = json.load(f)

print(f"Total items in DB: {len(db)}")

pvc_items = [item for item in db if "2-1-1" in item["code"]]
print(f"PVC items found: {len(pvc_items)}")
for item in pvc_items:
    print(f"Code: {item['code']}, Name: {item['name']}, Spec: {item['spec']}, Unit: {item['unit']}, Labor: {item['laborType']}, Factor: {item['laborFactor']}")
