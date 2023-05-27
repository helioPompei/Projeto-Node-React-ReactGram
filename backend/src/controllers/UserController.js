import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

// Generate User Token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: "7d" });
};

// Register user and sign int
const register = async (req, res) => {
  res.json({ msg: "Opa" });
};

export { register };
