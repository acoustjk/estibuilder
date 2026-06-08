import pypdf
import re
import json

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

def test():
    reader = pypdf.PdfReader("Source/DB_Source_T.pdf")
    page = reader.pages[210]
    text = page.extract_text()
    
    print("=== Raw Text ===")
    print(text[:400])
    
    raw_matches = list(re.finditer(r'\b(\d+-\d+-\d+(?:-\d+)?)\b', text))
    print("Matches found:", [m.group(1) for m in raw_matches])
    
    for idx, cm in enumerate(raw_matches):
        code = cm.group(1)
        start_pos = cm.start()
        end_pos = raw_matches[idx+1].start() if idx + 1 < len(raw_matches) else len(text)
        section_text = text[start_pos:end_pos]
        
        table_part = re.split(r'\[\s*해\s*설\s*\]', section_text)[0]
        normalized = " ".join([l.strip() for l in table_part.split('\n') if l.strip()])
        
        print(f"\n--- Code: {code} ---")
        print("Normalized start:", normalized[:200])
        
        # Header match
        header_match = re.match(r'^\s*(\d+-\d+-\d+(?:-\d+)?)\s*(.*?)(?=규격|단위|공정|통신내선공|통신설비공|통신외선공|통신케이블공|특별인부|보통인부|광케이블설치사|들어내기|닫기)', normalized)
        if not header_match:
            print("Header match FAILED")
            title = code
            table_content = normalized
        else:
            print("Header match SUCCESS")
            title = header_match.group(2).strip()
            table_content = normalized[len(header_match.group(0)):].strip()
            
        print("Title:", title)
        print("Table content start:", table_content[:200])
        
        # Columns
        columns = []
        header_search_area = normalized[:len(title) + 150]
        for lt in LABOR_TYPES:
            pattern = "".join([re.escape(c) + r"\s*" for c in lt]).strip()
            if re.search(pattern, header_search_area):
                columns.append(lt)
        print("Detected Columns:", columns)
        
        # Split by decimal blocks
        group_split = re.split(r'(\b\d*\.\d+(?:\.\d+)*\b)', table_content)
        print("Group split length:", len(group_split))
        
        # Print first few elements of group_split
        for i in range(min(10, len(group_split))):
            print(f"  [{i}]: {repr(group_split[i])}")

if __name__ == '__main__':
    test()
