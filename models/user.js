import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
	username: { type: String, required: true },
	passwordHash: { type: String, required: true }
})

export default mongoose.model("User", UserSchema)