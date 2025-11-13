import express from "express";
import { authentication } from "./middlewares/authentication.js";
import aiRouter from "./routes/aiRoutes.js";
import dbRouter from "./routes/dbRoutes.js"
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/error_service.js";
import { config } from "./config/config.js";
import { connectToDB } from "./config/mongodb.js";
dotenv.config();
const app = express();
const router = express.Router();

await connectToDB();

app.use(express.json()); // built-in middleware to parse JSON

// 🧠 Use our custom middleware globally

app.use(authentication);

app.use("/ai", aiRouter);

app.use("/db", dbRouter);

//using envs using config file
const port = config.port || 3000;


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
