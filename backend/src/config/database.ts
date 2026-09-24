import mongoose from "mongoose";

export const connectDatabase = async():Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODBURI as string)
        console.log("Mongo DB successfully connected.")        
    } catch (error) {
        console.log(`Mongo DB connection error : ${error}`)
        process.exit(1)
    }
}