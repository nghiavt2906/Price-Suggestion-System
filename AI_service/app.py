import joblib
import pandas as pd
import numpy as np
from keras.models import load_model
from flask import Flask, request, jsonify

app = Flask(__name__)

def preprocess(df: pd.DataFrame) -> pd.DataFrame:
    df['name'] = df['name'].fillna('') + ' ' + df['brand_name'].fillna('')
    df['description'] = (df['item_description'].fillna('') + ' ' + df['name'] + ' ' + df['category_name'].fillna(''))
    return df[['name', 'description', 'shipping', 'item_condition_id']]

def suggest_price(input):
	for key in input:
		input[key] = [input[key]]

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

	return pred[0]

@app.route('/')
def index():
    return "Price suggestion service"

@app.route('/predict',methods=['GET','POST'])
def predict():
	data = request.json
	if data == None:
		return 'Empty payload'
	else:
		prediction = suggest_price(data)

	return jsonify(prediction)

if __name__ == "__main__":
	app.run(host='0.0.0.0',debug=True)