import { User } from "../models/UserModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

export const authGuard = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  console.log(req.headers);
  const authHeader = req.headers["authorization"];

  console.log(req.headers["authorization"]);
  console.log(authHeader);

  // Split Bearer {TOKEN}
  const token: string | undefined = authHeader && authHeader.split(" ")[1];

  // Check if header has a token
  if (!token) return res.status(401).json({ errors: ["Acesso negado!"] });

  // Check if token is valid
  try {
    const verified = jwt.verify(token, jwtSecret!) as { id: string };

    console.log(verified);

    req.user = await User.findById(verified.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ errors: ["Token inválido."] });
  }
};
