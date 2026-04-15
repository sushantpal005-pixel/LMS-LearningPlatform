import mongoose, { mongo } from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)        // database connection
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("error occuered", error)
    }
}
export default connectDB