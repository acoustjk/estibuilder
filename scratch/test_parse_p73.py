import pypdf
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
reader = pypdf.PdfReader(pdf_path)
page = reader.pages[73]
text = page.extract_text()

# We will split the text into sections
sections = []
matches = list(re.finditer(r'\b(2-1-\d+)\b', text))
for idx, m in enumerate(matches):
    start = m.start()
    end = matches[idx+1].start() if idx + 1 < len(matches) else len(text)
    sections.append((m.group(1), text[start:end]))

for sec_code, sec_text in sections:
    print(f"\n=== Section: {sec_code} ===")
    
    # Split by [해 설] to isolate table text
    table_part = re.split(r'\[\s*해\s*설\s*\]', sec_text)[0]
    
    # Normalize spaces
    normalized = " ".join([l.strip() for l in table_part.split('\n') if l.strip()])
    print(f"Table text: {normalized[:150]}...")
    
    # 2. Extract specs without \b
    specs = re.findall(r'(\d+\s*㎜\s*(?:이\s*하|〃)?|\d+\s*㎜\s*[a-zA-Z가-힣〃]*|\d+\s*[CP본대열소])', normalized)
    print(f"Specs found ({len(specs)}): {specs}")
    
    # 3. Extract decimals
    decimals = re.findall(r'\d*\.\d+', normalized)
    factors = [float(d) for d in decimals if 0.0001 <= float(d) <= 8.0]
    print(f"Factors found ({len(factors)}): {factors}")
    
    # 4. Pair them
    if len(specs) > 0 and len(factors) == len(specs) * 2:
        columns = ["통신외선공", "보통인부"]
        num_specs = len(specs)
        print("Paired rows:")
        for i, spec in enumerate(specs):
            f1 = factors[i]
            f2 = factors[i + num_specs]
            print(f"  Spec: {spec} | {columns[0]}: {f1} | {columns[1]}: {f2}")
    else:
        print("  Mismatch in lengths or no specs found!")
