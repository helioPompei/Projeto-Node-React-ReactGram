// Import express
import express from "express";
const userRouter = express.Router();

// Import controller
import { register } from "../controllers/UserController.js";

// Middlewares
import validate from "../middlewares/handleValidation.js";
import userCreateValidation from "../middlewares/userValidations.js";

// User Routes
userRouter.get("/register", userCreateValidation(), validate, register);

export default userRouter;
