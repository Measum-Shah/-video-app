import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";
import { config as configDotenv } from "dotenv";

configDotenv(
    {path: '.env'}
)

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`MOngoDB connect at DB Host : ${connectionInstance.connection.host}`)
   
    }
    catch(error){
        console.log("MONGODB connection error",error);
        process.exit(1);

    }
}

export default connectDB;