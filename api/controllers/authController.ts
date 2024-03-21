import { Request, Response, NextFunction } from "express";
import { throwError } from "../utils/error";
import { User } from "../models/user";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = await req.body;

    if (!username || !email || !password) {
      next(throwError(400, "All fields are required"));
    }

    const emailUserExist = await User.findOne({ email });

    if (emailUserExist) {
      next(throwError(400, "Email already in use"));
    }

    const usernameUser = await User.findOne({ username });

    if (usernameUser) {
      next(throwError(400, "Username already in use"));
    }

    const hashedPassword = await bcryptjs.hash(password, 12);

    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = await req.body;

    console.log("email,password", email, password);
    if (!email || !password) {
      next(throwError(400, "All fields are required"));
    }
    const userExist = await User.findOne({ email });

    if (!userExist) {
      next(throwError(400, "Invalid credentials"));
      return;
    }

    const isPasswordValid = await bcryptjs.compare(
      password,
      userExist.password
    );

    if (!isPasswordValid) {
      next(throwError(400, "Invalid credentials"));
    }

    const token = jwt.sign(
      {
        id: userExist._id,
      },
      process.env.JWT_SECRET!
    );

    const { password: _, ...user } = userExist.toObject();

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
      })
      .json({ message: "User signed in successfully", user });
  } catch (error) {
    next(error);
  }
};

export const authController = {
  signUp,
  signIn,
};
