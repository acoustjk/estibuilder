import pypdf
import re
import json

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
output_json = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor_db.json"

print("Starting standard labor PDF extraction (v3)...")
reader = pypdf.PdfReader(pdf_path)
total_pages = len(reader.pages)
print(f"Total pages in PDF: {total_pages}")

LABOR_TYPES = ["통신내선공", "통신설비공", "통신외선공", "통신케이블공", "특별인부", "보통인부", "광케이블설치사"]
UNITS = ["10m", "〃", "개", "대", "세트", "조", "10개", "회선", "열", "본", "km", "Port", "소", "공정", "개소"]
unit_pattern = "|".join([re.escape(u) for u in UNITS])

parsed_items = []
seen_codes = set()

# Loop through pages 30 to 300 (covering chapters 2 to 7)
for page_idx in range(30, 300):
    page = reader.pages[page_idx]
    text = page.extract_text()
    if not text:
        continue
        
    # Skip table of contents pages
    if "····" in text or "차 례" in text or "차　　　례" in text:
        continue
        
    # Clean text to remove some headers
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    full_text = " ".join(lines)
    
    # Find all main section codes on this page (filtering out footnote references)
    raw_matches = list(re.finditer(r'\b(\d+-\d+-\d+(?:-\d+)?)\b', full_text))
    clean_matches = []
    
    for m in raw_matches:
        start = m.start()
        # Check characters before start of match for curly quotes
        before = full_text[max(0, start-3):start]
        if any(q in before for q in ['“', '"', "'", '‘', '”', '’']):
            continue
        clean_matches.append(m)
        
    if not clean_matches:
        continue
        
    # Split page text into blocks by section
    for i, cm in enumerate(clean_matches):
        code = cm.group(1)
        start_pos = cm.start()
        end_pos = clean_matches[i+1].start() if i + 1 < len(clean_matches) else len(full_text)
        
        section_text = full_text[start_pos:end_pos]
        
        # 1. Determine labor columns by their order of appearance in this section text
        col_mappings = []
        for lt in LABOR_TYPES:
            # Match with spaces between characters
            pattern = "".join([re.escape(c) + r"\s*" for c in lt]).strip()
            match = re.search(pattern, section_text)
            if match:
                col_mappings.append((match.start(), lt))
        
        col_mappings.sort()
        columns = [lt for pos, lt in col_mappings]
        
        if not columns:
            # Fallback based on code category
            if code.startswith("2") or code.startswith("3"):
                columns = ["통신외선공", "보통인부"]
            elif code.startswith("4"):
                columns = ["통신케이블공", "통신내선공"]
            else:
                columns = ["통신설비공", "보통인부"]
                
        # 2. Find units in this section text
        matches = list(re.finditer(r'\b(' + unit_pattern + r')\b|(' + unit_pattern + r')', section_text))
        if not matches:
            continue
            
        # 3. Extract items by splitting on units
        prev_end = 0
        prefix_group = ""
        
        for m_idx, m in enumerate(matches):
            unit = m.group(0)
            unit_start = m.start()
            unit_end = m.end()
            
            name_part = section_text[prev_end:unit_start].strip()
            
            # Look for factors after unit
            after_text = section_text[unit_end:]
            
            # Build dynamic regex pattern for factors based on the number of columns in this section
            num_cols = len(columns)
            pattern_parts = [r'([0-9\.]+|\-)']
            for _ in range(num_cols - 1):
                pattern_parts.append(r'(?:\s*)([0-9\.]+|\-)?')
            factor_regex = r'^(?:\s*)' + "".join(pattern_parts)
            
            factor_matches = re.findall(factor_regex, after_text)
            
            factors = []
            factor_str_len = 0
            if factor_matches:
                match_val = factor_matches[0]
                if isinstance(match_val, str):
                    match_val = [match_val]
                for f in match_val:
                    if f:
                        factors.append(f)
                
                m_factors = re.match(factor_regex, after_text)
                if m_factors:
                    factor_str_len = m_factors.end()
                    
            prev_end = unit_end + factor_str_len
            
            # Clean name_part
            clean_name = name_part
            # Remove section code
            clean_name = clean_name.replace(code, "")
            # Remove "제 X 장"
            clean_name = re.sub(r'제\s*\d+\s*장\s*[가-힣\s\·]+', '', clean_name)
            # Remove page numbers like - 90 -
            clean_name = re.sub(r'-\s*\d+\s*-', '', clean_name)
            # Remove header words and other noise
            for lt in LABOR_TYPES:
                clean_name = clean_name.replace(lt, "")
            clean_name = clean_name.replace("공정", "").replace("단위", "").replace("규격", "").replace("기준", "").strip()
            # Clean extra spaces
            clean_name = re.sub(r'\s+', ' ', clean_name).strip()
            
            # Resolve prefix groups for categories
            # Look for keywords that specify cabling/piping types
            for kw in ["UTP", "STP", "FTP", "광섬유", "광케이블", "PVC관", "합성수지관", "강관", "흄관", "가공", "지중"]:
                if kw in clean_name:
                    prefix_group = kw
                    break
            
            # Inherit prefix group for short items or sub-specifications
            full_item_name = clean_name
            if prefix_group and len(clean_name) < 15 and prefix_group not in clean_name:
                if clean_name:
                    full_item_name = f"{prefix_group} {clean_name}"
                else:
                    full_item_name = prefix_group
            
            # Resolve unit `〃`
            resolved_unit = unit
            if unit == "〃" and parsed_items:
                # Find previous item with the same code to inherit unit from
                prev_unit = "개"
                for item in reversed(parsed_items):
                    if item["code"] == f"통신 {code}":
                        prev_unit = item["unit"]
                        break
                resolved_unit = prev_unit
            elif unit == "〃":
                resolved_unit = "개"
                
            # Filter out empty names or headers that got parsed as names
            if len(full_item_name) < 2 or full_item_name.isdigit() or "page" in full_item_name.lower():
                continue
                
            # Category determination
            first_digit = code.split("-")[0]
            category = "device"
            if first_digit in ["2", "3"]:
                category = "pipe"
            elif first_digit == "4":
                category = "cable"
                
            # Add to parsed items for each valid factor
            for col_idx, col_name in enumerate(columns):
                if col_idx < len(factors):
                    f_val = factors[col_idx]
                    if f_val != "-":
                        try:
                            factor_float = float(f_val)
                            if factor_float > 0:
                                parsed_items.append({
                                    "code": f"통신 {code}",
                                    "name": full_item_name[:50],
                                    "spec": "표준 규격",
                                    "unit": resolved_unit,
                                    "laborType": col_name,
                                    "laborFactor": factor_float,
                                    "category": category,
                                    "keywords": [full_item_name[:20]]
                                })
                        except ValueError:
                            pass

# Save results to JSON file
with open(output_json, "w", encoding="utf-8") as f:
    json.dump(parsed_items, f, ensure_ascii=False, indent=4)

print(f"Extraction complete! Successfully parsed {len(parsed_items)} detailed standard labor items.")
print(f"Data saved to {output_json}")
