import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

class AuthController {
	static async login(req, res) {
		const { username, password } = req.body

		try {
			const userInDb = await User.findOne({ username })
			if (!userInDb) return res.status(404).send('User not found')

			const isValidPass = await bcrypt.compare(password, userInDb.passwordHash)
			if (!isValidPass) return res.status(400).send('Invalid credentials')

			const token = await jwt.sign({ username, id: result._id }, process.env.jwtSecret, { expiresIn: '5h' })

			res.status(200).json({ result: userInDb, token })
		} catch (error) {

		}

		return res.statusCode(200)
	}

	static async register(req, res) {
		const { username, password } = req.body

		try {
			const userInDb = await User.findOne({ username })
			if (userInDb) return res.status(400).send('User already exists')

			const passwordHash = await bcrypt.hash(password, 12)

			const result = await User.create({ username, passwordHash })

			res.statusCode(200)
		} catch (error) {
			console.log(`Error: ${error}`)
			res.status(404).send('Something went wrong.')
		}
	}
}

export default AuthController