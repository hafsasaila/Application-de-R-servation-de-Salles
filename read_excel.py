
import pandas as pd
import json

try:
    df = pd.read_excel('salles.xlsx')
    # Convert to list of dicts
    data = df.to_dict(orient='records')
    with open('salles.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
    print("Successfully wrote to salle.json")
except Exception as e:
    print(f"Error reading excel: {e}")
