import { authController } from "../controllers/authController";
import express from "express";

const router = express.Router();

router.post("/sign-up", authController.signUp);

export const authRoute = router;
