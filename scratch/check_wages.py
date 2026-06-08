with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# Look for mapping of laborType in Excel export
import re
lines = content.split('\n')
for idx, line in enumerate(lines, 1):
    if "wageCell" in line or "wages" in line or "WAGE_RATES" in line:
        print(f"{idx}: {line.strip()}")
