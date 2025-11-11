import express from "express";
import { requestLogger } from "../middlewares/request_logger.js";
import { generateContent } from "../controllers/aiController.js";
const router = express.Router();

router.post("/generate-content", requestLogger, generateContent);

export default router;
