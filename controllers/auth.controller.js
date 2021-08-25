import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

class AuthController {
	static async login(req, res) {

		return res.statusCode(200)
	}

	static async register(req, res) {
		const { username, password } = req.body

		try {
			const userInDb = await User.findOne({ username })
			if (userInDb) return res.status(400).send('User already exists')

			const passwordHash = await bcrypt.hash(password, 12)

			const result = await User.create({ username, passwordHash })

			const token = await jwt.sign({ username, id: result._id }, process.env.jwtSecret, { expiresIn: '5h' })

			res.status(200).send(token)
		} catch (error) {
			console.log(`Error: ${error}`)
			res.status(404).send('Something went wrong.')
		}
	}
}

export default AuthController