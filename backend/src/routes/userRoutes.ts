import express from "express";
const userRoutes = express.Router();
import { getCurrentUser, login, register } from "../controllers/userController";
import { handleValidation } from "../validators/handleValidations";
import {
  userLoginValidator,
  userRegisterValidator,
} from "../validators/userValidations";
import { authGuard } from "../middlewares/authGuard";

userRoutes
  .post("/register", userRegisterValidator, handleValidation, register)
  .post("/login", userLoginValidator, handleValidation, login)
  .get("/profile", authGuard, getCurrentUser);

export default userRoutes;
