import { Request, Response } from "express";
import { Photo } from "../models/PhotoModel";
import mongoose from "mongoose";

// Insert a photo, with an user related to it
export const insertPhoto = async (req: any, res: Response) => {
  const { title } = req.body;
  const image = req.file?.filename;

  const newPhoto = await Photo.create({
    image,
    title,
    userId: req.user.id,
    userName: req.user.name,
  });

  if (!newPhoto) {
    res.status(422).json({
      errors: ["Houve um proble, por favor tente novamente."],
    });
    return;
  }

  res.status(201).json(newPhoto);
};

// Remove a photo from DB
export const deletePhoto = async (req: any, res: Response) => {
  const { id } = req.params;

  const photo = await Photo.findById(new mongoose.Types.ObjectId(id));

  // Check if photo exists
  if (!photo) {
    res.status(404).json({ erros: ["Foto não encontrada!"] });
    return;
  }

  // Check if photo belongs to user
  if (!photo.userId || photo.userId.toString() !== req.user._id.toString()) {
    res
      .status(422)
      .json({ errors: ["Houve um proble, por favor tente novamente."] });
    return;
  }

  await Photo.findByIdAndDelete(photo._id);
  // Send a success response if deletion is successful
  res
    .status(200)
    .json({ id: photo._id, message: "Foto deletada com sucesso!" });
};
