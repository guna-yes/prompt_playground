import dotenv from "dotenv";

dotenv.config();

export const config = {
  gemini_key: process.env.GEMINI_API_KEY,
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongo_uri:process.env.MONGO_URI
};
