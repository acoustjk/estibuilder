import re

# We will simulate the collapsed line of Page 90
text = "4-3  꼬임케이블 4-3-1  꼬임케이블 포설공정단위통    신케이블공통  신내선공UTP, STP, FTP구내 4P10m0.15- 25P〃0.24- 50P〃0.35- 100P〃0.50-옥외 4P이하〃0.05- Thin 〃0.18- Thick〃0.32- RS-Cable10P 이하〃0.18-10P 초과〃0.23- AUI 〃0.20- Token Cable(2P)〃- 0.17  [해 설]"

# Define units we want to use as delimiters
UNITS = ["10m", "〃", "개", "대", "세트", "조", "10개", "회선", "열", "본", "km", "Port"]
# Create regex pattern for units
unit_pattern = "|".join([re.escape(u) for u in UNITS])

# Find all occurrences of units with their start and end positions
matches = list(re.finditer(r'\b(' + unit_pattern + r')\b|(' + unit_pattern + r')', text))

print(f"Found {len(matches)} unit matches:")
for m in matches:
    print(f"Match: '{m.group(0)}' at {m.start()}-{m.end()}")

# Let's write a loop to split the text
# An item consists of: [Text from previous end to current unit start] + [Unit] + [Factors following the unit]
items = []
prev_end = 0

for i, m in enumerate(matches):
    unit = m.group(0)
    unit_start = m.start()
    unit_end = m.end()
    
    # The name is between prev_end and unit_start
    name_part = text[prev_end:unit_start].strip()
    
    # Now find the factors following the unit (until the next item name starts)
    # The next item name starts at the start of the next unit, minus some characters for the name.
    # Actually, we can look at the text after unit_end.
    # The factors are numbers (floats) or dashes.
    # Let's extract floats/dashes right after unit_end.
    after_text = text[unit_end:]
    # Match floats like 0.15 or dashes -
    factor_matches = re.findall(r'^(?:\s*)([0-9\.]+|\-)(?:\s*)([0-9\.]+|\-)?', after_text)
    
    factors = []
    if factor_matches:
        for f in factor_matches[0]:
            if f:
                factors.append(f)
                
    # Update prev_end. It should be after the factors.
    # How many characters did the factors occupy?
    factor_str_len = 0
    if factor_matches:
        # Let's reconstruct the matched factors string to know where it ends
        matched_str = "".join(factor_matches[0])
        # Find this matched_str in the beginning of after_text
        # We can just search for it or approximate
        # Let's match with spaces
        m_factors = re.match(r'^(?:\s*)(?:[0-9\.]+|\-)(?:\s*)(?:[0-9\.]+|\-)?', after_text)
        if m_factors:
            factor_str_len = m_factors.end()
            
    prev_end = unit_end + factor_str_len
    
    items.append({
        "name_part": name_part,
        "unit": unit,
        "factors": factors
    })

print("\n--- Extracted Items ---")
for item in items:
    print(item)
