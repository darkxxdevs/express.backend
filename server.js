import express from "express";
import { userRouter } from "./routes/users.js";
import mongoose from "mongoose";
import { config as configDotenv } from "dotenv";

configDotenv();

const app = express();
const port = process.env.PORT || 4000;

console.log(process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful!");
  })
  .catch((error) => {
    console.error("Error connecting to database", error);
  });

app.get("/", (req, res) => {
  res.send("home page");
});

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
