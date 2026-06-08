import pypdf
import re
import json
import os

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
output_json = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor_db.json"

LABOR_TYPES = ["통신내선공", "통신설비공", "통신외선공", "통신케이블공", "특별인부", "보통인부", "광케이블설치사", "들어내기", "닫기"]

def split_concatenated_token(token):
    parts = token.split('.')
    if len(parts) <= 1:
        try:
            val = float(token.strip())
            return [val] if 0.0001 <= val <= 25.0 else []
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
            val = float(f"{current_int}.{fraction}")
            if 0.0001 <= val <= 25.0:
                result.append(val)
        except ValueError:
            pass
        current_int = next_int
        
    last_part = parts[-1]
    try:
        val = float(f"{current_int}.{last_part}")
        if 0.0001 <= val <= 25.0:
            result.append(val)
    except ValueError:
        pass
        
    return result

def main():
    print("Starting standard labor PDF extraction (v6)...")
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    print(f"Total pages in PDF: {total_pages}")

    parsed_items = []
    seen_pairs = set() # To avoid duplicate entries

    # Loop through standard labor pages (30 to 450)
    for page_idx in range(30, min(total_pages, 450)):
        page = reader.pages[page_idx]
        text = page.extract_text()
        if not text:
            continue
            
        # Skip table of contents pages
        if "····" in text or "차 례" in text or "차　　　례" in text:
            continue

        # Find section codes like 2-1-1 or 4-3-2
        raw_matches = list(re.finditer(r'\b(\d+-\d+-\d+(?:-\d+)?)\b', text))
        clean_matches = []
        for m in raw_matches:
            before = text[max(0, m.start()-3):m.start()]
            if any(q in before for q in ['“', '"', "'", '‘', '”', '’']):
                continue
            clean_matches.append(m)
            
        if not clean_matches:
            continue
            
        for idx, cm in enumerate(clean_matches):
            code = cm.group(1)
            start_pos = cm.start()
            end_pos = clean_matches[idx+1].start() if idx + 1 < len(clean_matches) else len(text)
            
            section_text = text[start_pos:end_pos]
            
            # Split section text by [해 설] to isolate table text
            table_part = re.split(r'\[\s*해\s*설\s*\]', section_text)[0]
            
            # Normalize spacing
            normalized = " ".join([l.strip() for l in table_part.split('\n') if l.strip()])
            
            # Slice off header
            header_match = re.match(r'^\s*(\d+-\d+-\d+(?:-\d+)?)\s*(.*?)(?=규격|단위|공정|통신내선공|통신설비공|통신외선공|통신케이블공|특별인부|보통인부|광케이블설치사|들어내기|닫기)', normalized)
            if not header_match:
                title = code
                table_content = normalized
            else:
                header_matched_text = header_match.group(0)
                title = header_match.group(2).strip()
                table_content = normalized[len(header_matched_text):].strip()
                
            # Clean title
            clean_title = re.sub(r'제\s*\d+\s*장\s*[가-힣\s\·\.,]+', '', title)
            clean_title = re.sub(r'-\s*\d+\s*-', '', clean_title)
            clean_title = clean_title.strip()
            if len(clean_title) < 2:
                clean_title = code
                
            # Detect unit in section text
            unit = "개"
            unit_match = re.search(r'\(?\s*단위\s*:\s*([가-힣\w\(\)\/]+)\)?', section_text)
            if unit_match:
                unit = unit_match.group(1).strip()
                if unit.endswith(')') and unit.count('(') < unit.count(')'):
                    unit = unit[:-1].strip()
            else:
                if "PVC관" in clean_title:
                    unit = "본"
                elif "케이블" in clean_title or "배선" in clean_title or "관로" in clean_title:
                    unit = "m"
                    
            # Determine columns in this section
            columns = []
            header_search_area = normalized[:len(title) + 150]
            for lt in LABOR_TYPES:
                pattern = "".join([re.escape(c) + r"\s*" for c in lt]).strip()
                if re.search(pattern, header_search_area):
                    columns.append(lt)
                    
            if not columns:
                if code.startswith("2") or code.startswith("3"):
                    columns = ["통신외선공", "보통인부"]
                elif code.startswith("4"):
                    columns = ["통신케이블공", "통신내선공"]
                else:
                    columns = ["통신설비공", "보통인부"]
                    
            # Category
            first_digit = code.split("-")[0]
            category = "pipe" if first_digit in ["2", "3"] else "cable" if first_digit == "4" else "device"
            
            # Split by decimal blocks
            group_split = re.split(r'(\b\d*\.\d+(?:\.\d+)*\b)', table_content)
            
            current_specs = []
            current_factors_cols = []
            
            def emit_current_group():
                nonlocal current_specs, current_factors_cols
                if not current_specs or not current_factors_cols:
                    return
                    
                num_specs = len(current_specs)
                num_cols = len(current_factors_cols)
                
                aligned_cols = []
                for col in current_factors_cols:
                    if len(col) < num_specs:
                        col = col + [0.0] * (num_specs - len(col))
                    elif len(col) > num_specs:
                        col = col[:num_specs]
                    aligned_cols.append(col)
                    
                for i, spec in enumerate(current_specs):
                    for j in range(min(len(columns), num_cols)):
                        col_name = columns[j]
                        val = aligned_cols[j][i]
                        if val <= 0.0:
                            continue
                            
                        clean_spec = spec.replace(" ", "")
                        
                        pair_key = (code, clean_spec, col_name)
                        if pair_key in seen_pairs:
                            continue
                        seen_pairs.add(pair_key)
                        
                        keywords = [clean_title, spec]
                        if "UTP" in clean_title or "꼬임" in clean_title:
                            keywords.extend(["utp", "케이블", "cable", "꼬임"])
                        if "광섬유" in clean_title or "광케이블" in clean_title:
                            keywords.extend(["광케이블", "광섬유", "광", "fiber", "optical"])
                        if "배관" in clean_title or "PVC" in clean_title or "관로" in clean_title:
                            keywords.extend(["배관", "관로", "pipe", "pvc", "배선"])
                            
                        parsed_items.append({
                            "code": f"통신 {code}",
                            "name": clean_title,
                            "spec": spec,
                            "unit": unit,
                            "laborType": col_name,
                            "laborFactor": val,
                            "category": category,
                            "keywords": list(set([k.lower() for k in keywords if len(k) > 1]))
                        })
                
                current_specs = []
                current_factors_cols = []

            for g_idx in range(0, len(group_split) - 1, 2):
                spec_text = group_split[g_idx]
                factor_token = group_split[g_idx + 1]
                
                specs = re.findall(r'(\d+\s*[㎜㎛]\s*(?:[×x\*]\s*\d+\s*[㎜㎛])?\s*(?:이\s*하|〃)?|\d+\s*[CP본대열소포트〃]+|\d+\s*회\s*선)', spec_text)
                specs = [s.strip() for s in specs if s.strip() and not re.match(r'^\d+-\d+-\d+$', s.strip())]
                
                if specs:
                    emit_current_group()
                    current_specs = specs
                    
                factors = split_concatenated_token(factor_token)
                
                if current_specs and factors:
                    n = len(current_specs)
                    if len(factors) % n == 0:
                        k = len(factors) // n
                        for col_idx in range(k):
                            col_factors = factors[col_idx * n : (col_idx + 1) * n]
                            current_factors_cols.append(col_factors)
                    else:
                        current_factors_cols.append(factors)
                        
            emit_current_group()

    # Save results to JSON file
    with open(output_json, "w", encoding="utf-8") as f:
        json.dump(parsed_items, f, ensure_ascii=False, indent=4)

    print(f"Extraction complete! Successfully parsed {len(parsed_items)} standard labor items.")
    print(f"Data saved to {output_json}")

if __name__ == '__main__':
    main()
