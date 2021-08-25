import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import express from "express";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import checkAuth from "./middlewares/checkAuth.js";

dotenv.config()

const app = express()

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(cookieParser())

app.use('/api/auth', authRoute)

app.use(checkAuth)
app.use('/api/user', userRoute)

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => {
		console.log('connected to db.')

		const port = process.env.PORT || 5000
		app.listen(port, () => console.log(`running on port ${port}`))
	})
	.catch(e => console.log(`Error: ${e}`))