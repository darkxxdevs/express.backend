import express from "express";
import { User } from "../models/user.js";
const userRouter = express.Router();

userRouter.use(express.json());
userRouter.use(express.urlencoded());

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    console.log("Error fetching user data !", error);
    res.status(500).json({ error: "Error fetching data !" });
  }
});

userRouter.get("/:username", async (req, res) => {
  const userName = await req.params.username;
  const matchedUser = await User.findOne({ username: userName });
  if (!matchedUser) {
    return res.status(404).send("User not found!");
  }
  res.status(200).json(matchedUser);
});

userRouter.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        error: "User already exists !",
      });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    res.status(201).send({ message: "User succcessfully created!" });
  } catch (error) {
    res.status(500).send("Error resigerting user:" + error.message);
  }
});

export { userRouter };
