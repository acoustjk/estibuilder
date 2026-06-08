import pypdf
import re
import json

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
reader = pypdf.PdfReader(pdf_path)

LABOR_TYPES = ["통신내선공", "통신설비공", "통신외선공", "통신케이블공", "특별인부", "보통인부", "광케이블설치사"]
UNITS = ["10m", "〃", "개", "대", "세트", "조", "10개", "회선", "열", "본", "km", "Port"]
unit_pattern = "|".join([re.escape(u) for u in UNITS])

def parse_page_v3(page_idx):
    page = reader.pages[page_idx]
    text = page.extract_text()
    if not text:
        return []
    
    # 1. Detect section code
    codes = re.findall(r'\b(\d+-\d+-\d+(?:-\d+)?)\b', text)
    if not codes:
        return []
    code = codes[0]
    
    # Clean text to remove some header/footer noise
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    if not lines:
        return []
        
    full_text = " ".join(lines)
    
    # 2. Determine labor columns by their order of appearance in the page
    # We find all LABOR_TYPES in full_text and sort them by position
    col_mappings = []
    for lt in LABOR_TYPES:
        # Search for name with optional spaces
        pattern = "".join([re.escape(c) + r"\s*" for c in lt]).strip()
        match = re.search(pattern, full_text)
        if match:
            col_mappings.append((match.start(), lt))
            
    col_mappings.sort()
    columns = [lt for pos, lt in col_mappings]
    
    if not columns:
        # Fallback if no labor type mentioned
        columns = ["통신내선공"]
        
    # 3. Find units in text
    matches = list(re.finditer(r'\b(' + unit_pattern + r')\b|(' + unit_pattern + r')', full_text))
    if not matches:
        return []
        
    # 4. Extract rows
    extracted = []
    prev_end = 0
    prefix_group = ""
    
    for idx, m in enumerate(matches):
        unit = m.group(0)
        unit_start = m.start()
        unit_end = m.end()
        
        name_part = full_text[prev_end:unit_start].strip()
        
        # Look for factors after unit
        after_text = full_text[unit_end:]
        
        # Build dynamic regex pattern for factors based on the number of columns
        num_cols = len(columns)
        pattern_parts = [r'([0-9\.]+|\-)']
        for _ in range(num_cols - 1):
            pattern_parts.append(r'(?:\s*)([0-9\.]+|\-)?')
        factor_regex = r'^(?:\s*)' + "".join(pattern_parts)
        
        factor_matches = re.findall(factor_regex, after_text)
        
        factors = []
        factor_str_len = 0
        if factor_matches:
            # handle case where findall returns tuple (for multiple groups)
            match_val = factor_matches[0]
            if isinstance(match_val, str):
                match_val = [match_val]
            for f in match_val:
                if f:
                    factors.append(f)
            
            # Find exact length of match
            m_factors = re.match(factor_regex, after_text)
            if m_factors:
                factor_str_len = m_factors.end()
                
        prev_end = unit_end + factor_str_len
        
        # Clean name_part
        # Remove headers, section titles, code, page numbers, etc.
        clean_name = name_part
        # Remove section code
        clean_name = clean_name.replace(code, "")
        # Remove "제 X 장" or similar
        clean_name = re.sub(r'제\s*\d+\s*장\s*[가-힣\s]+', '', clean_name)
        # Remove page numbers like - 90 -
        clean_name = re.sub(r'-\s*\d+\s*-', '', clean_name)
        # Remove column headers if they are in the first item's name
        for lt in LABOR_TYPES:
            clean_name = clean_name.replace(lt, "")
        clean_name = clean_name.replace("공정", "").replace("단위", "").strip()
        
        # Clean extra spaces
        clean_name = re.sub(r'\s+', ' ', clean_name).strip()
        
        # Handle prefix grouping (e.g. UTP, STP, FTP)
        if "구내" in clean_name or "옥외" in clean_name or "Cable" in clean_name or "케이블" in clean_name:
            # Update prefix group
            # Find if there is a main category in the beginning
            prefix_match = re.match(r'^([^P]+[P]?)\s+(구내|옥외|이하|초과)', clean_name)
            if prefix_match:
                prefix_group = prefix_match.group(1).strip()
            elif "UTP" in clean_name or "STP" in clean_name or "FTP" in clean_name:
                prefix_group = "UTP/STP/FTP"
                
        # Inherit prefix if name is short or starts with a sub-spec
        full_item_name = clean_name
        if prefix_group and len(clean_name) < 15 and not clean_name.startswith(prefix_group):
            if clean_name:
                full_item_name = f"{prefix_group} {clean_name}"
            else:
                full_item_name = prefix_group
                
        # If the unit is 〃, we copy the unit from the previous item (or default to 10m / 개)
        resolved_unit = unit
        if unit == "〃" and extracted:
            resolved_unit = extracted[-1]["unit"]
        elif unit == "〃":
            resolved_unit = "개"
            
        # Add to extracted
        # Map factors to columns
        for col_idx, col_name in enumerate(columns):
            if col_idx < len(factors):
                f_val = factors[col_idx]
                if f_val != "-":
                    try:
                        extracted.append({
                            "code": f"통신 {code}",
                            "name": full_item_name,
                            "spec": "표준 규격",
                            "unit": resolved_unit,
                            "laborType": col_name,
                            "laborFactor": float(f_val),
                            "category": "cable" if code.startswith("4") else ("pipe" if code.startswith("2") or code.startswith("3") else "device")
                        })
                    except ValueError:
                        pass
                        
    return extracted

# Test on page index 119 (Page 90)
p90_items = parse_page_v3(119)
print(f"Page 90 Extracted {len(p90_items)} items:")
for item in p90_items:
    print(f"  {item['name']} ({item['laborType']} {item['laborFactor']}인) - {item['unit']}")

# Test on page index 120 (Page 91)
p91_items = parse_page_v3(120)
print(f"\nPage 91 Extracted {len(p91_items)} items:")
for item in p91_items:
    print(f"  {item['name']} ({item['laborType']} {item['laborFactor']}인) - {item['unit']}")
