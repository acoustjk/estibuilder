import json

json_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor_db.json"
out_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\scratch\db_v3_inspect.txt"

with open(json_path, "r", encoding="utf-8") as f:
    db = json.load(f)

print(f"Total items in DB: {len(db)}")

# Let's group and check some items
with open(out_path, "w", encoding="utf-8") as out:
    out.write(f"Total items in DB: {len(db)}\n\n")
    out.write("=== First 30 items ===\n")
    for idx, item in enumerate(db[:30], 1):
        out.write(f"{idx}: Code: {item['code']} | Name: {item['name']} | Unit: {item['unit']} | LaborType: {item['laborType']} | LaborFactor: {item['laborFactor']} | Category: {item['category']}\n")
        
    out.write("\n=== UTP Items ===\n")
    utp_items = [item for item in db if "utp" in item["name"].lower() or "꼬임" in item["name"]]
    for idx, item in enumerate(utp_items, 1):
        out.write(f"{idx}: Code: {item['code']} | Name: {item['name']} | Unit: {item['unit']} | LaborType: {item['laborType']} | LaborFactor: {item['laborFactor']}\n")

print(f"Inspection saved to db_v3_inspect.txt")
