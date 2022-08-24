import mongoose from "mongoose";

const dbUri = process.env.MONGODB_URI as string

export const connectDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log("Database connected already...");
            return
        }

        await mongoose.connect(dbUri)
        console.log("Database connected successfully...");
    } catch (error: any) {
        console.log(`Database connection error: -- ${error.message}`);
    }
}