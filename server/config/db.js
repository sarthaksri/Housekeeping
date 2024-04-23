import mongoose from "mongoose";

//write a function mongoConnect() 
const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.mongoURI);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database", error);
    }
    }

export default mongoConnect;