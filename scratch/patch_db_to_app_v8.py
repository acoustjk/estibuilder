import json
import os

json_path = r"standard_labor_db.json"
app_js_path = r"app.js"

print("Loading regenerated labor DB...")
if not os.path.exists(json_path):
    print(f"Error: {json_path} does not exist!")
    exit(1)

with open(json_path, "r", encoding="utf-8") as f:
    db = json.load(f)

print(f"Loaded {len(db)} items.")

# Format as JavaScript objects matching the exact schema
js_items = []
for item in db:
    labors_js = json.dumps(item["labors"], ensure_ascii=False)
    keywords_js = json.dumps(item["keywords"], ensure_ascii=False)
    js_line = (
        f'  {{ '
        f'code: "{item["code"]}", '
        f'name: "{item["name"]}", '
        f'spec: "{item["spec"]}", '
        f'unit: "{item["unit"]}", '
        f'labors: {labors_js}, '
        f'category: "{item["category"]}", '
        f'page: {item["page"]}, '
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

# We need to find the correct matching closing block of the array.
# Since the array contains items and finishes with "];", let's find the matching "];"
# To be robust, let's scan for "];" starting from start_idx.
# Note that individual items don't end with "];", so the first "];" after start_idx should be the end of the array.
end_idx = content.find(end_marker, start_idx)
if end_idx == -1:
    print("Error: Closing marker of STANDARD_LABOR_DB not found!")
    exit(1)

# To verify we got the right end_idx, let's make sure there isn't something else.
# The original code has STANDARD_LABOR_DB as a huge array, and the closing bracket is followed by a newline or other statements.
# Let's adjust end_idx if there are multiple "];" inside the array if any (shouldn't be, since items are object literals).
old_db_block = content[start_idx : end_idx + len(end_marker)]
print(f"Found old DB block of length {len(old_db_block)} chars.")

new_content = content[:start_idx] + js_array_str + content[end_idx + len(end_marker):]

print("Writing patched app.js...")
with open(app_js_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Patching completed successfully!")
