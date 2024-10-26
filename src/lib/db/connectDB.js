import mongoose from "mongoose";
export async function connectDB(){
    try {
        let dbConnect = await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongoDB is Connected" ,dbConnect.connection.host()); 
    } 
    catch (error) {
     console.log("error.message>>>", error.message);
        
    }
}