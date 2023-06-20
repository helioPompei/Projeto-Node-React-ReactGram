import express from "express";
const indexRoutes = express.Router();

// User routes
import userRoutes from "./userRoutes";
indexRoutes.use("/user", userRoutes);

export default indexRoutes;
