// Import express
import express from "express";
const indexRouter = express.Router();

// imported routes
import userRoutes from "./userRoutes.js";

// Routes
indexRouter.use("/api/user", userRoutes);

export default indexRouter;
