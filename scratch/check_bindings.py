with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# Check for closeModal function definition
if "function closeModal" in content or "const closeModal" in content:
    print("Found closeModal in app.js!")
else:
    print("closeModal NOT found in app.js definition (might be inline or in index.html).")

# Let's count how many addEventListener calls are in app.js
import re
listeners = re.findall(r'\.addEventListener\(', content)
print(f"Total addEventListener calls in app.js: {len(listeners)}")
