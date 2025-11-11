import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

// Controller functions handle route logic

const ai = new GoogleGenAI({});
export const generateContent = async (req, res,next) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: req.body?.query,
    });
    res.json({
      success: true,
      data: response.text,
    });
  } catch (err) {
    next(err)
  }
};
