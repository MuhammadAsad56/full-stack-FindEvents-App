import mongoose from "mongoose"

const eventSchema = new mongoose.Schema({
    title : String,
    discription : String,
    startTime : String,
    endTime : String,
    startDatet : String,
    endDate : String,
    location: {
        lat: Number,
        long: Number
    },
    createdBy: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    going: [{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Users"
        }],
    address: String,
},{timestamps:true})

export const Users = mongoose.model("Users", eventSchema)