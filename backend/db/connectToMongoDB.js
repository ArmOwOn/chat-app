import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("\x1b[36m%s\x1b[0m", "> Connection Successful!");
  } catch (error) {
    console.error("Error in connecting to MongoDB: ", error.message);
  }
};

export default connectToMongoDB;
