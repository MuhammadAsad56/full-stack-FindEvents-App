import mongoose from "mongoose"

const subuCategoriesSchema = new mongoose.Schema({
    title : String,
    discription : String,
    thumbnail: String,
    ctaegory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    }
},{timestamps:true})

export const SubCategories = mongoose.model("SubCategories", subuCategoriesSchema)