import pypdf
import re
import json

pdf_path = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor.pdf.pdf"
output_json = r"C:\Users\에스에스브이\.gemini\antigravity\scratch\excel-exporter\sample\tongsin_labor_db.json"

print("Starting standard labor PDF extraction (v5)...")
reader = pypdf.PdfReader(pdf_path)
total_pages = len(reader.pages)
print(f"Total pages in PDF: {total_pages}")

LABOR_TYPES = ["통신내선공", "통신설비공", "통신외선공", "통신케이블공", "특별인부", "보통인부", "광케이블설치사"]

parsed_items = []
seen_codes = set()

# Process pages 30 to 450 (standard labor chapters)
for page_idx in range(30, 450):
    page = reader.pages[page_idx]
    text = page.extract_text()
    if not text:
        continue
        
    if "····" in text or "차 례" in text or "차　　　례" in text:
        continue

    # Find section codes
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
        
        # Split section text by [해 설]
        table_part = re.split(r'\[\s*해\s*설\s*\]', section_text)[0]
        
        # Normalize table part spaces
        normalized = " ".join([l.strip() for l in table_part.split('\n') if l.strip()])
        
        # Extract title and remove header
        header_match = re.match(r'^\s*(\d+-\d+-\d+(?:-\d+)?)\s*(.*?)(?=규격|단위|공정|통신내선공|통신설비공|통신외선공|통신케이블공|특별인부|보통인부|광케이블설치사)', normalized)
        if not header_match:
            header_matched_text = f"{code}"
            title = code
            table_content = normalized
        else:
            header_matched_text = header_match.group(0)
            title = header_match.group(2).strip()
            table_content = normalized[len(header_matched_text):].strip()
            
        # Clean title
        clean_title = re.sub(r'제\s*\d+\s*장\s*[가-힣\s\·]+', '', title)
        clean_title = re.sub(r'-\s*\d+\s*-', '', clean_title)
        clean_title = clean_title.strip()
        if len(clean_title) < 2:
            clean_title = code
            
        # Determine columns
        columns = []
        for lt in LABOR_TYPES:
            pattern = "".join([re.escape(c) + r"\s*" for c in lt]).strip()
            if re.search(pattern, normalized[:len(header_matched_text) + 120]):
                columns.append(lt)
        
        # Fallback columns
        if not columns:
            if code.startswith("2") or code.startswith("3"):
                columns = ["통신외선공", "보통인부"]
            elif code.startswith("4"):
                columns = ["통신케이블공", "통신내선공"]
            else:
                columns = ["통신설비공", "보통인부"]
                
        # Extract specs using size-like pattern (without word boundaries \b to handle collapsed texts)
        specs = re.findall(r'(\d+\s*㎜\s*(?:이\s*하|〃)?|\d+\s*㎜\s*[a-zA-Z가-힣〃]*|\d+\s*[CP본대열소포트])', table_content)
        specs = [s.strip() for s in specs if s.strip()]
        
        # Extract factors using general decimal pattern
        decimals = re.findall(r'\d*\.\d+', table_content)
        factors = []
        for d in decimals:
            try:
                f_float = float(d)
                if 0.0001 <= f_float <= 8.0:
                    factors.append(f_float)
            except ValueError:
                pass
                
        num_specs = len(specs)
        num_cols = len(columns)
        
        # Category
        first_digit = code.split("-")[0]
        category = "pipe" if first_digit in ["2", "3"] else "cable" if first_digit == "4" else "device"
        
        # Check pairing
        if num_specs > 0 and len(factors) == num_specs * num_cols:
            # Pair them!
            for i, spec in enumerate(specs):
                for j, col_name in enumerate(columns):
                    factor_val = factors[j * num_specs + i]
                    keywords = [clean_title, spec]
                    if "UTP" in clean_title or "꼬임" in clean_title:
                        keywords.extend(["utp", "케이블", "cable", "꼬임"])
                    if "광섬유" in clean_title or "광케이블" in clean_title:
                        keywords.extend(["광케이블", "광섬유", "광", "fiber", "optical"])
                    if "배관" in clean_title or "PVC" in clean_title or "관로" in clean_title:
                        keywords.extend(["배관", "관로", "pipe", "pvc", "배선"])
                        
                    parsed_items.append({
                        "code": f"통신 {code}",
                        "name": f"{clean_title} ({spec})",
                        "spec": "표준 규격",
                        "unit": "본" if "PVC관" in clean_title else "M" if "케이블" in clean_title else "개",
                        "laborType": col_name,
                        "laborFactor": factor_val,
                        "category": category,
                        "keywords": list(set([k.lower() for k in keywords if len(k) > 1]))
                    })
        else:
            # Fallback
            rep_factor = factors[0] if factors else 0.1
            rep_labor = columns[0] if columns else "보통인부"
            parsed_items.append({
                "code": f"통신 {code}",
                "name": clean_title,
                "spec": "표준 규격",
                "unit": "개",
                "laborType": rep_labor,
                "laborFactor": rep_factor,
                "category": category,
                "keywords": [clean_title.lower()]
            })

# Save results to JSON file
with open(output_json, "w", encoding="utf-8") as f:
    json.dump(parsed_items, f, ensure_ascii=False, indent=4)

print(f"Extraction complete! Successfully parsed {len(parsed_items)} standard labor items.")
print(f"Data saved to {output_json}")
