import joblib
import pandas as pd
import numpy as np
from keras.models import load_model

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
	scaler = joblib.load('./AI models/scaler.h5')
	model_1 = load_model('./AI models/model_1.h5')
	model_b_1 = load_model('./AI models/model_b_1.h5')
	model_2 = load_model('./AI models/model_2.h5')
	model_b_2 = load_model('./AI models/model_b_2.h5')

	df = pd.DataFrame(input)
	X = encoder.transform(preprocess(df)).astype(np.float32)
	Xb = X.astype(np.bool).astype(np.float32)

	pred_1 = model_1.predict(X)
	pred_2 = model_2.predict(X)
	pred_3 = model_b_1.predict(Xb)
	pred_4 = model_b_2.predict(Xb)

	pred = np.mean([pred_1, pred_2, pred_3, pred_4], axis=0)
	pred = np.expm1(scaler.inverse_transform(pred.reshape(-1, 1))[:, 0])

	print(pred)


if __name__ == '__main__':
	main()