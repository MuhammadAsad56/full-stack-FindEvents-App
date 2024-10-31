import mongoose from "mongoose"

const subuCategoriesSchema = new mongoose.Schema({
    title : {type: String, required: true},
    discription : {type: String},
    thumbnail:  {type: String, required: true},
    ctaegory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories",
        required: true
    }
},{timestamps:true})

export const SubCategories = mongoose.models.SubCategories || mongoose.model("SubCategories", subuCategoriesSchema)