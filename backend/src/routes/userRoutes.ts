import express from "express";
const userRoutes = express.Router();

userRoutes.post("/", (req, res) => {
  res.status(200).json({ message: "Api working!" });
});

export default userRoutes;
