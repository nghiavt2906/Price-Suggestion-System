from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer

corpus = [
	'who are you?',
	"what's up",
	'hello'
]

query = 'hello'

tfidf_vectorizer = TfidfVectorizer()
tfidf_matrix_train = tfidf_vectorizer.fit_transform(corpus)

tfidf_query = tfidf_vectorizer.transform([query])

similarity = cosine_similarity(tfidf_matrix_train, tfidf_query)

print(similarity)