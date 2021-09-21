import joblib
# import keras as ks
import pandas as pd

def preprocess(df: pd.DataFrame) -> pd.DataFrame:
    df['name'] = df['name'].fillna('') + ' ' + df['brand_name'].fillna('')
    df['description'] = (df['item_description'].fillna('') + ' ' + df['name'] + ' ' + df['category_name'].fillna(''))
    return df[['name', 'description', 'shipping', 'item_condition_id']]

def main():
	input = {
		"name": ["Razer BlackWidow Chroma Keyboard"],
		"item_condition_id": [3],
		"category_name": ["Electronics/Computers & Tablets/Components & Parts"],
		"brand_name": ["Razer"],
		"shipping": [0],
		"item_description":["This keyboard is in great condition and works like it came out of the box. All of the ports are tested and work perfectly. The lights are customizable via the Razer Synapse app on your PC."]
	}

	df = pd.DataFrame(input)
	print(df)
	print(df.info())


if __name__ == '__main__':
	main()