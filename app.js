import express from "express";
import { authentication } from "./middlewares/authentication.js";
import aiRouter from "./routes/aiRoutes.js";

import dotenv from "dotenv";
import { errorHandler } from "./middlewares/error_service.js";
dotenv.config();
const app = express();
const router = express.Router();

app.use(express.json()); // built-in middleware to parse JSON

// 🧠 Use our custom middleware globally

app.use(authentication);

app.use("/ai", aiRouter);

const port = process.env.PORT || 3000;
// The client gets the API key from the environment variable `GEMINI_API_KEY`.

app.use((req, res, next) => {
  console.log("Middlewares Testing !");
  next();
});

app.post("/api/prompt", async (req, res) => {
  //  let result = await main()
  //  res.send(result.text)
  res.status(200).json("result");
});

app.use(errorHandler);

app.listen(port, (req, res) => {
  console.log(`Listening on Port ${port}!`);
});
