import mongoose from "mongoose"
import {DB_NAME} from "../constants.js";

// db is in another continent
const connectDb = async() =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb is connected!! DB : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection failed", error);
        process.exit(1) // The command process.exit(1) is used in Node.js to terminate the current process. 
    }
}

export default connectDb