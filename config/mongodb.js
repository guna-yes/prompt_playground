import mongoose from "mongoose";
export const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connection Successful to ${connection?.connection?.host} `);
  } catch (err) {
    console.log(`MongoDB Connection Failed.Error ${err.message || err}`);
  }
};
