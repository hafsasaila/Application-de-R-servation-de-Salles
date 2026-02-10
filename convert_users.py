import pandas as pd
import json

try:
    df = pd.read_excel('utilisateurs.xlsx')
    data = df.to_dict(orient='records')
    with open('utilisateurs.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
    print("Successfully converted utilisateurs.xlsx to utilisateurs.json")
except Exception as e:
    print(f"Error: {e}")
