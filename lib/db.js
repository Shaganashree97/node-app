import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(
            
        );
        console.log("MongoDB connected...");
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}