const getProductConditionLabel = id => {
	switch (id) {
		case 1:
			return 'Very bad'
		case 2:
			return 'Bad'
		case 3:
			return 'Old'
		case 4:
			return 'Recently bought'
		case 5:
			return 'New'
		default:
			return null
	}
}

export default getProductConditionLabel;