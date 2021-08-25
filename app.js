import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";

import authRoute from "./routes/auth.js";

dotenv.config()

const app = express()

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/auth', authRoute)

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