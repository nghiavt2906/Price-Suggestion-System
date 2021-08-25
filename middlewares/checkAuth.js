import jwt from "jsonwebtoken";

const checkAuth = (req, res, next) => {
	if (!req.headers["authorization"]) return res.sendStatus(401)

	const token = req.headers["authorization"].split(' ')[1]

	try {
		const decoded = jwt.verify(token, process.env.jwtSecret)
		req.user = decoded
	} catch (error) {
		return res.status(400).send('Invalid token')
	}

	return next()
}

export default checkAuth