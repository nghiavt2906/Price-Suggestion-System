class AuthController {
	static async login(req, res) {

		return res.statusCode(200)
	}

	static async register(req, res) {
		const { username, password } = req.body

		try {

		} catch (error) {

		}

		return res.statusCode(200)
	}
}

export default AuthController