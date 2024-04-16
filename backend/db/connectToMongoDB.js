/* eslint-disable no-undef */
import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    process.stdout.write(`Connecting to MongoDB...`);
    await mongoose.connect(process.env.MONGO_DB_URI);
    process.stdout.write("\x1b[36m  Successful!\x1b[0m\n");
  } catch (error) {
    console.error("Error in connecting to MongoDB: ", error.message);
  }
};

export default connectToMongoDB;
