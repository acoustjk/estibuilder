import pypdf
import re

def extract_lines_with_coords(pypdf_page, page_height):
    char_list = []
    def visitor(text, cm, tm, fontDict, fontSize):
        if not text.strip():
            return
        x_t, y_t = tm[4], tm[5]
        x_page = cm[0] * x_t + cm[2] * y_t + cm[4]
        y_page = cm[1] * x_t + cm[3] * y_t + cm[5]
        y_plumber = page_height - y_page
        char_list.append({
            "text": text,
            "x": x_page,
            "y": y_plumber
        })
    pypdf_page.extract_text(visitor_text=visitor)
    
    lines = []
    char_list.sort(key=lambda c: c["y"])
    for char in char_list:
        added = False
        for line in lines:
            if abs(char["y"] - line["y"]) <= 4.0: # 4pt vertical margin
                line["chars"].append(char)
                added = True
                break
        if not added:
            lines.append({
                "y": char["y"],
                "chars": [char]
            })
            
    reconstructed_lines = []
    for line in lines:
        line["chars"].sort(key=lambda c: c["x"])
        line_text = ""
        last_char = None
        for char in line["chars"]:
            if last_char:
                if (char["x"] - last_char["x"]) > 5.0 and line_text[-1] != " ":
                    line_text += " "
            line_text += char["text"]
            last_char = char
        reconstructed_lines.append({
            "y": line["y"],
            "text": line_text.strip()
        })
        
    reconstructed_lines.sort(key=lambda l: l["y"])
    return reconstructed_lines

def test():
    reader = pypdf.PdfReader("Source/DB_Source_T.pdf")
    pages = [210, 215, 216, 219]
    
    for p in pages:
        page = reader.pages[p]
        page_height = float(page.mediabox.height)
        lines = extract_lines_with_coords(page, page_height)
        
        print(f"\n=== Page {p} ===")
        # Search for headers
        for line in lines:
            text = line["text"]
            # Look for 3-part or 4-part code
            match = re.search(r'\b(\d+-\d+-\d+(?:-\d+)?)\b', text)
            if match:
                code = match.group(1)
                idx = text.find(code)
                title = text[idx + len(code):].strip()
                # Clean up title
                title = re.sub(r'^[가-힣\s·\.,]+공사', '', title) # skip chapter header
                title = title.strip()
                print(f"Detected Section: Code={code}, Title={title}, y={line['y']:.1f}")

if __name__ == '__main__':
    test()
