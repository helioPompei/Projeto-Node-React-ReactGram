import express from "express";
const userRouter = express.Router();
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

userRouter
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

export { userRouter };
