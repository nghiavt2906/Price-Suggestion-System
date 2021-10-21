const getShippingLabel = id => {
	switch (id) {
		case 0:
			return 'Free (paid by seller)'
		case 1:
			return 'Paid'
		default:
			return null;
	}
}

export default getShippingLabel;