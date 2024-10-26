import { connectDB } from "@/lib/db/connectDB";
import  {Users}  from "@/lib/models/Users.models";


export async function GET(request) {
   await connectDB()
   const users = await Users.find()
   return Response.json({users: users, msg: "users fetched Successfully", status: 200})
}

export async function POST(request) {
    await connectDB()
    const obj = await request.json()
    const newUser = new Users(obj)
    await newUser.save()
    return Response.json({msg :"user Added Successfully", user: newUser}, {status: 201})
}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
 
