import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => {
    console.log("MongoDb  Connected Successfully !!!");
  })
  .catch((err) => {
    console.log("MongoDb  Connection Failed !!", err);
  });



const app = express();

app.listen(3000,() => {
  console.log("server is listing on port no 3000")
}
)