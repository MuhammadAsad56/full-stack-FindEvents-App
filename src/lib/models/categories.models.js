import mongoose from "mongoose"

const categoriesSchema = new mongoose.Schema({
    title : {type: String, required: true},
    discription : {type: String, required: true},
    thumbnail:  {type: String, required: true},

},{timestamps:true})

export const Categories = mongoose.models.Categories || mongoose.model("Categories", categoriesSchema)