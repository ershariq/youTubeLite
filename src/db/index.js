import { DB_NAME } from "../constants.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`MongoDB connected successfully`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
    process.exit(1); // Exit the app on failure
  }
};

export default connectDB;
