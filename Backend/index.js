import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDB/connect.js";
import postRoutes from "./routes/postRoutes.js";
import openAIRoutes from "./routes/openAIRoutes.js";
//help in pulling enviroment varible from .env file
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/openAI", openAIRoutes);

app.get("/", async (req, res) => {
  res.send("Hello From Imaverse");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
