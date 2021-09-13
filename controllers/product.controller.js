class ProductController {
	static async suggestPrice(req, res) {
		console.log(req.body)

		res.send('ok')
	}
}

export default ProductController