import mongoose from "mongoose"

const categoriesSchema = new mongoose.Schema({
    title : String,
    discription : String,
    thumbnail: String

},{timestamps:true})

export const Categories = mongoose.model("Categories", categoriesSchema)