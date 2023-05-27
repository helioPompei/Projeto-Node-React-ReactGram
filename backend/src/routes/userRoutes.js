// Import express
import express from "express";
const userRouter = express.Router();
// Import controller
import { register } from "../controllers/UserController.js";

// User Routes
userRouter.get("/register", register);

export default userRouter;
