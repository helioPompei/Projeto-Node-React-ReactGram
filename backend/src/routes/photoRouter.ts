import express from "express";
import { deletePhoto, insertPhoto } from "../controllers/photoController";
import { authGuard } from "../middlewares/authGuard";
import { imageUpload } from "../middlewares/imageUpload";
import { photoInsertValidation } from "../validators/photoValidations";
import { handleValidation } from "../validators/handleValidations";
const photoRouter = express.Router();

photoRouter
  .post(
    "/",
    authGuard,
    imageUpload.single("image"),
    photoInsertValidation,
    handleValidation,
    insertPhoto
  )
  .delete("/:id", authGuard, deletePhoto);

export { photoRouter };
