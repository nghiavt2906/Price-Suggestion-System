import joblib
import pandas as pd
import numpy as np

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

	encoder = joblib.load('./AI models/encoder.h5')

	df = pd.DataFrame(input)
	X = encoder.transform(preprocess(df)).astype(np.float32)
	print(X)

if __name__ == '__main__':
	main()