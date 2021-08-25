import User from "../models/user.js";

class UserController {
	static async getMe(req, res) {
		const { id: userId } = req.user

		const userInDb = await User.findById(userId)

		if (!userInDb) return res.status(404).send('User not found')

		res.json(userInDb)
	}
}

export default UserController