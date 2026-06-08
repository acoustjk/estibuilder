import json

json_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor_db.json"

with open(json_path, "r", encoding="utf-8") as f:
    db = json.load(f)

high_factors = [item for item in db if item["laborFactor"] > 10.0]
print(f"Total items with factor > 10: {len(high_factors)}")
for idx, item in enumerate(high_factors[:20], 1):
    print(f"{idx}: Code: {item['code']} | Name: {item['name']} | Factor: {item['laborFactor']}")
