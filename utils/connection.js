import mongoose from "mongoose";

const connectionToMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.jt3lgry.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to DB!");
  } catch (error) {
    console.error(error);
  }
};

export default connectionToMongo;