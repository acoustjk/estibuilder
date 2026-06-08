import pdfplumber
import json

def test():
    print("Loading PDF using pdfplumber...")
    with pdfplumber.open("Source/DB_Source_T.pdf") as pdf:
        page = pdf.pages[210]
        
        print("\n--- Extracting Text ---")
        print(page.extract_text()[:300])
        
        print("\n--- Extracting Tables ---")
        tables = page.extract_tables()
        print(f"Found {len(tables)} tables.")
        for idx, table in enumerate(tables):
            print(f"\nTable {idx+1}:")
            for row in table[:10]: # Print first 10 rows
                print(row)

if __name__ == '__main__':
    test()
