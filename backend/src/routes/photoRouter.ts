import express from "express";
import {
  commentPhoto,
  deletePhoto,
  getAllPhotos,
  getPhotoById,
  getUserPhotos,
  insertPhoto,
  likePhoto,
  searchPhotos,
  updatePhoto,
} from "../controllers/photoController";
import { authGuard } from "../middlewares/authGuard";
import { imageUpload } from "../middlewares/imageUpload";
import {
  CommentValidation,
  photoInsertValidation,
  photoUpdateValidation,
} from "../validators/photoValidations";
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
  .delete("/:id", authGuard, deletePhoto)
  .get("/", authGuard, getAllPhotos)
  .get("/search", authGuard, searchPhotos)
  .get("/user/:id", authGuard, getUserPhotos)
  .get("/:id", authGuard, getPhotoById)
  .put("/:id", authGuard, photoUpdateValidation, handleValidation, updatePhoto)
  .post("/like/:id", authGuard, likePhoto)
  .post(
    "/comment/:id",
    authGuard,
    CommentValidation,
    handleValidation,
    commentPhoto
  );

export { photoRouter };
