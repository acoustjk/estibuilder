import re

app_js_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\app.js"

with open(app_js_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find STANDARD_LABOR_DB declaration
start_marker = "const STANDARD_LABOR_DB = ["
end_marker = "];"

start_idx = content.find(start_marker)
if start_idx == -1:
    print("STANDARD_LABOR_DB not found!")
    exit(1)

end_idx = content.find(end_marker, start_idx)
db_content = content[start_idx:end_idx + len(end_marker)]

# Count items by looking for { ... }
items = re.findall(r'\{[^\}]+\}', db_content)
print(f"Total items in STANDARD_LABOR_DB: {len(items)}")

if items:
    print("\n--- First 3 items ---")
    for item in items[:3]:
        print(item.strip())
    print("\n--- Last 3 items ---")
    for item in items[-3:]:
        print(item.strip())
