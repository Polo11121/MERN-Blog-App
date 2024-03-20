import { Request, Response, NextFunction } from "express";
import { throwError } from "../utils/error";
import { User } from "../models/user";
import bcryptjs from "bcryptjs";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      next(throwError(400, "All fields are required"));
    }

    const hashedPassword = bcryptjs.hash(password, 12);

    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const authController = {
  signUp,
};
