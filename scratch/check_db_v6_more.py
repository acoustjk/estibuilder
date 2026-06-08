import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("sample/tongsin_labor_db.json", "r", encoding="utf-8") as f:
    db = json.load(f)

for item in db:
    if "2-2-1-3" in item["code"] or "2-4-1" in item["code"]:
        print(f"Code: {item['code']}, Name: {item['name']}, Spec: {item['spec']}, Labor: {item['laborType']}, Factor: {item['laborFactor']}")
