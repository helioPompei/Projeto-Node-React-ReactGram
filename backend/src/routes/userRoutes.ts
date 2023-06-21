import express from "express";
const userRoutes = express.Router();
import {
  getCurrentUser,
  getUserById,
  login,
  register,
  update,
} from "../controllers/userController";
import { handleValidation } from "../validators/handleValidations";
import {
  userLoginValidation,
  userRegisterValidation,
  userUpdateValidation,
} from "../validators/userValidations";
import { authGuard } from "../middlewares/authGuard";
import { imageUpload } from "../middlewares/imageUpload";

userRoutes
  .post("/register", userRegisterValidation, handleValidation, register)
  .post("/login", userLoginValidation, handleValidation, login)
  .get("/profile", authGuard, getCurrentUser)
  .put(
    "/",
    authGuard,
    userUpdateValidation,
    handleValidation,
    imageUpload.single("profileImage"),
    update
  )
  .get("/:id", getUserById);

export default userRoutes;
