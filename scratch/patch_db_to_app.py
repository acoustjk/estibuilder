import json
import re

json_path = r"sample/tongsin_labor_db.json"
app_js_path = r"app.js"

print("Loading regenerated labor DB...")
with open(json_path, "r", encoding="utf-8") as f:
    db = json.load(f)

print(f"Loaded {len(db)} items.")

# Format as JavaScript objects
js_items = []
for item in db:
    keywords_js = json.dumps(item["keywords"], ensure_ascii=False)
    js_line = (
        f'  {{ '
        f'code: "{item["code"]}", '
        f'name: "{item["name"]}", '
        f'spec: "{item["spec"]}", '
        f'unit: "{item["unit"]}", '
        f'laborType: "{item["laborType"]}", '
        f'laborFactor: {item["laborFactor"]}, '
        f'category: "{item["category"]}", '
        f'keywords: {keywords_js} '
        f'}}'
    )
    js_items.append(js_line)

js_array_str = "const STANDARD_LABOR_DB = [\n" + ",\n".join(js_items) + "\n];"

print("Reading app.js...")
with open(app_js_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace const STANDARD_LABOR_DB = [ ... ];
start_marker = "const STANDARD_LABOR_DB = ["
end_marker = "];"

start_idx = content.find(start_marker)
if start_idx == -1:
    print("Error: STANDARD_LABOR_DB constant not found in app.js!")
    exit(1)

end_idx = content.find(end_marker, start_idx)
if end_idx == -1:
    print("Error: Closing marker of STANDARD_LABOR_DB not found!")
    exit(1)

old_db_block = content[start_idx : end_idx + len(end_marker)]
print(f"Found old DB block of length {len(old_db_block)} chars.")

new_content = content[:start_idx] + js_array_str + content[end_idx + len(end_marker):]

print("Writing patched app.js...")
with open(app_js_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Patching completed successfully!")
