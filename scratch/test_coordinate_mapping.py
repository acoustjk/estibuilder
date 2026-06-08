import pypdf
import pdfplumber
import json

def test():
    reader = pypdf.PdfReader("Source/DB_Source_T.pdf")
    pypdf_page = reader.pages[210]
    page_height = float(pypdf_page.mediabox.height)
    
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
    
    with pdfplumber.open("Source/DB_Source_T.pdf") as pdf:
        plumber_page = pdf.pages[210]
        tables = plumber_page.find_tables()
        
        with open("scratch/plumber_mapped_p210.txt", "w", encoding="utf-8") as out_f:
            for t_idx, table in enumerate(tables):
                out_f.write(f"\n--- Table {t_idx+1} ---\n")
                
                for r_idx, row in enumerate(table.rows):
                    row_cells_text = []
                    for cell in row.cells:
                        if cell is None:
                            row_cells_text.append("")
                            continue
                        
                        x0 = getattr(cell, "x0", None)
                        if x0 is None:
                            x0, y0, x1, y1 = cell
                        else:
                            y0 = cell.y0
                            x1 = cell.x1
                            y1 = cell.y1
                            
                        cell_chars = []
                        for char in char_list:
                            if (x0 - 0.5) <= char["x"] <= (x1 + 0.5) and (y0 - 0.5) <= char["y"] <= (y1 + 0.5):
                                cell_chars.append(char)
                                
                        cell_chars.sort(key=lambda c: (c["y"], c["x"]))
                        
                        cell_text = ""
                        last_char = None
                        for char in cell_chars:
                            if last_char:
                                if abs(char["y"] - last_char["y"]) > 3.0:
                                    cell_text += "\n"
                                elif (char["x"] - last_char["x"]) > 5.0 and cell_text[-1] != " ":
                                    cell_text += " "
                            cell_text += char["text"]
                            last_char = char
                            
                        row_cells_text.append(cell_text.strip())
                        
                    out_f.write(f"Row {r_idx}: {row_cells_text}\n")
    print("Done! Mapped table written to scratch/plumber_mapped_p210.txt")

if __name__ == '__main__':
    test()
