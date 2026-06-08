import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Find all onclick, onchange, onsubmit, etc.
handlers = re.findall(r'\bon[a-z]+="[^"]+"', content)
print(f"Total inline event handlers found: {len(handlers)}")
for h in handlers[:15]:
    print(h)
