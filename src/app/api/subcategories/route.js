import { connectDB } from "@/lib/db/connectDB";
import { SubCategories } from "@/lib/models/subCategories.models";

export async function GET(request) {
    await connectDB()
    const reqUrl = request.url
    // console.log("reqUrl>>", reqUrl);
    const {searchParams} = new URL(reqUrl);
    // console.log("searchParams>>", searchParams);
    // console.log("searchParams.get>>", searchParams.get("category"));
    const query = {}
    if(searchParams.get("category")){
       query.ctaegory = searchParams.get("category")
    }
    console.log("query>>", query);
    const subCategories = await SubCategories.find(query).populate("ctaegory", "title")
    return Response.json(
        {subCategory: subCategories, msg: "SubCategories fetched successfully"},
        {status: 201}
    )
}

export async function POST(request) {
    await connectDB()
    const obj = await request.json()
    const newSubCategory = new SubCategories(obj)
    await newSubCategory.save()
    return Response.json(
        {subCatrgory : newSubCategory, msg: "SubCategory Added Successfully"},
        {status: 201}
    )
}

export async function PUT(request) {}
 
export async function DELETE(request) {}
 