import express from "express";
const userRoutes = express.Router();
import { register } from "../controllers/userController";
import { handleValidation } from "../validators/handleValidations";
import { userRegisterValidator } from "../validators/userValidations";

userRoutes.post("/register", userRegisterValidator, handleValidation, register);

export default userRoutes;
