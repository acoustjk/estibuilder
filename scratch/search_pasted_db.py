with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# Find occurrences of 1-1-27-1
import re
matches = re.findall(r'\{[^}]*1-1-27-1[^}]*\}', content)
print(f"Found {len(matches)} matches for 1-1-27-1 in app.js:")
for m in matches[:5]:
    print(m)
