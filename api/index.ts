import { errorHandler } from "./middlewares/errorHandler";
import { userRoute } from "./routes/userRoute";
import { authRoute } from "./routes/authRoute";
import mongoose from "mongoose";
import express from "express";
import "dotenv/config";

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const app = express();

app.use("/api/auth", authRoute);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
