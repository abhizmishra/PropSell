import bcryptjs from "bcryptjs";

import User from "../models/user.model.js";
import { MongoExpiredSessionError } from "mongodb";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPass = await bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPass });
  try {
    await newUser.save().then(() => {
      res.json("new User created succesfully");
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
