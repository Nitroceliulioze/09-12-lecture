import mongoose from "mongoose";

export const connectionToMongo = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.jt3lgry.mongodb.net/animals?retryWrites=true&w=majority");
        console.log("Connected to DB succsessfully");
    } catch (error) {
    console.error(error);
 }
}

