import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: Error & { statusCode?: number },
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";

  console.log("error", error);
  res.status(statusCode).json({ message, statusCode, success: false });

  next();
};
