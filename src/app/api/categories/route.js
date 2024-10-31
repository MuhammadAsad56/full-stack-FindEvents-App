import { connectDB } from "@/lib/db/connectDB";
import { Categories } from "@/lib/models/categories.models";

export async function GET(request) {
    await connectDB()
    const category = await Categories.find()
    return Response.json(
        {category: category, msg: "category fetched Successfully"},
        {status: 200}
    )
}
  
export async function POST(request) {
    await connectDB()
    const obj = await request.json()
    const newCategory = new Categories(obj)
    await newCategory.save()
    return Response.json(
        {newCategory: newCategory, msg: "category Added Successfully"},
        {status: 201}
    )
}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 