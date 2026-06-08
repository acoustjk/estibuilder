import pypdf
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
reader = pypdf.PdfReader(pdf_path)

def split_concatenated_token(token):
    parts = token.split('.')
    if len(parts) <= 1:
        try:
            return [float(token)] if token.strip() else []
        except ValueError:
            return []
    
    result = []
    current_int = parts[0]
    
    for idx in range(1, len(parts) - 1):
        middle = parts[idx]
        if len(middle) >= 2:
            fraction = middle[:2]
            next_int = middle[2:]
        else:
            fraction = middle
            next_int = "0"
            
        if not next_int:
            next_int = "0"
            
        try:
            result.append(float(f"{current_int}.{fraction}"))
        except ValueError:
            pass
        current_int = next_int
        
    last_part = parts[-1]
    try:
        result.append(float(f"{current_int}.{last_part}"))
    except ValueError:
        pass
        
    return result

def test_page(page_num):
    print(f"\n================ PAGE {page_num} ================")
    page = reader.pages[page_num]
    text = page.extract_text()
    
    # Split by section
    matches = list(re.finditer(r'\b(2-1-\d+)\b', text))
    if not matches:
        print("No section matches found!")
        return
        
    for idx, m in enumerate(matches):
        sec_code = m.group(1)
        start = m.start()
        end = matches[idx+1].start() if idx + 1 < len(matches) else len(text)
        sec_text = text[start:end]
        
        print(f"\n--- Section {sec_code} ---")
        
        # Split by [해 설] to isolate table text
        table_part = re.split(r'\[\s*해\s*설\s*\]', sec_text)[0]
        
        # Normalize spacing
        normalized = " ".join([l.strip() for l in table_part.split('\n') if l.strip()])
        
        # Split normalized text into groups using decimal blocks
        # Regex matches tokens that are decimal numbers (potentially concatenated)
        # e.g., "0.060.07..." or "0.14"
        group_split = re.split(r'(\b\d*\.\d+(?:\.\d+)*\b)', normalized)
        
        # group_split will have:
        # index 0: text before decimals 1
        # index 1: decimals 1
        # index 2: text between decimals 1 and decimals 2
        # index 3: decimals 2
        # ...
        
        # We pair each text block with the following decimal block
        for g_idx in range(0, len(group_split) - 1, 2):
            spec_text = group_split[g_idx]
            factor_token = group_split[g_idx + 1]
            
            # Extract specs from spec_text
            specs = re.findall(r'(\d+\s*㎜\s*(?:이\s*하|〃)?|\d+\s*㎜\s*[a-zA-Z가-힣〃]*|\d+\s*[CP본대열소])', spec_text)
            # Filter out false specs like section codes "2-1-1" or page numbers if any
            specs = [s.strip() for s in specs if s.strip() and not re.match(r'^\d+-\d+-\d+$', s.strip())]
            
            # Parse factors from factor_token
            factors = split_concatenated_token(factor_token)
            
            print(f"Group {g_idx//2}:")
            print(f"  Spec text snippet: {spec_text[-100:].strip()}")
            print(f"  Specs found ({len(specs)}): {specs}")
            print(f"  Factors found ({len(factors)}): {factors}")
            
            # Verify pairing
            if len(specs) > 0 and len(factors) % len(specs) == 0:
                num_cols = len(factors) // len(specs)
                print(f"  Success! Paired successfully with {num_cols} columns.")
                # Print pairings
                for i, spec in enumerate(specs):
                    paired_vals = [factors[j * len(specs) + i] for j in range(num_cols)]
                    print(f"    Spec: {spec} -> {paired_vals}")
            else:
                print("  Mismatch in specs and factors length!")

test_page(72)
test_page(73)
