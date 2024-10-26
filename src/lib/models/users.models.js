import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    location: {
        lat: Number,
        long: Number
    },
    profileImg: String,
    address: String,
    bio: String
},{timestamps:true})

export const Users = mongoose.models.Users || mongoose.model("Users", userSchema)