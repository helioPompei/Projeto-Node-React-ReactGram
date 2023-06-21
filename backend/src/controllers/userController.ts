import { Request, Response } from "express";
import { User } from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET!;

// Generate user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: "1d" });
};

// Register user and sign in
export const register = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Register" });
};
