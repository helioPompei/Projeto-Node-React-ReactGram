import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import { User } from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const jwtSecret = process.env.JWT_SECRET!;

// Generate user token
const generateToken = (id: mongoose.Types.ObjectId) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: "1d" });
};

// Register user and sign in
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email });

  if (user) {
    res.status(422).json({ errors: ["E-mail já cadastrado no sistema."] });
    return;
  }

  // Generate password hashed
  const salt = await bcrypt.genSalt();
  const passwordHashed = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    password: passwordHashed,
  });

  // Check if user was created successfully, return the token
  if (!newUser) {
    res.status(422).json({ erros: ["Erro interno ao criar usuario."] });
  }

  // Return token
  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
  });
};

// Sign user in
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({ errors: ["Usuario não cadastrado no sistema."] });
    return;
  }

  // Check if password matches
  if (!(await bcrypt.compare(password, user.password!))) {
    res.status(422).json({ erros: ["Senha inválida."] });
  }

  // Return token
  res.status(201).json({
    _id: user._id,
    profileImage: user.profileImage,
    token: generateToken(user._id),
  });
};

// Get current logged in user
export const getCurrentUser = async (req: any, res: Response) => {
  const user = req.user;

  res.status(200).json(user);
};

// Update an user
export const update = async (req: any, res: Response) => {
  const { name, password, bio } = req.body;

  let profileImage = null;

  if (req.file) {
    profileImage = req.file.filename;
  }

  if (name) {
    req.user.name = name;
  }

  if (password) {
    // Generate password hashed
    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash(password, salt);

    req.user.password = passwordHashed;
  }
  if (profileImage) {
    req.user.profileImage = profileImage;
  }
  if (bio) {
    req.user.bio = bio;
  }

  try {
    await req.user.save();
    res.status(200).json(req.user);
  } catch (err) {
    res.status(500).json({ erros: ["Erro ao salvar o usuario."] });
  }
};
