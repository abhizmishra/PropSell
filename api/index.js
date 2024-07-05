import express, { json } from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDb  Connected Successfully !!!");
  })
  .catch((err) => {
    console.log("MongoDb  Connection Failed !!", err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server is listing on port no 3000");
});
// app.use method allows us to use the created router in diffrent folder which makes parents file clean also we can create diff routes for diff usecase


app.use("api/user", userRouter);
app.use("/api/auth", authRouter);