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

  try {
    const photo = await Photo.findById(new mongoose.Types.ObjectId(id));

    if (!photo) {
      res.status(404).json({ errors: ["Foto não encontrada!"] });
      return;
    }

    // Check if photo belongs to user
    if (!photo.userId || photo.userId.toString() !== req.user._id.toString()) {
      res
        .status(422)
        .json({ errors: ["Houve um problema, por favor tente novamente."] });
      return;
    }

    await Photo.findByIdAndDelete(photo._id);
    res
      .status(200)
      .json({ id: photo._id, message: "Foto deletada com sucesso." });
  } catch (err) {
    res
      .status(422)
      .json({ errors: ["Houve um problema, por favor tente novamente."] });
    return;
  }
};

// Get all photos
export const getAllPhotos = async (req: Request, res: Response) => {
  const allPhotos = await Photo.find({})
    .sort([["createdAt", -1]])
    .exec();

  res.status(200).json(allPhotos);
};

export const getUserPhotos = async (req: Request, res: Response) => {
  const { id } = req.params;

  const allUserPhotos = await Photo.find({ userId: id })
    .sort([["createdAt", -1]])
    .exec();

  res.status(200).json(allUserPhotos);
};

// Get photo by id
export const getPhotoById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const photo = await Photo.findById(new mongoose.Types.ObjectId(id));
    // Check if photo exists
    if (!photo) {
      res
        .status(404)
        .json({ errors: ["Foto não encontrada em nossa base de dados!"] });
    }

    res.status(200).json(photo);
  } catch (err) {
    res
      .status(422)
      .json({ errors: ["Houve um problema, por favor tente novamente."] });
  }
};

// Update a photo
export const updatePhoto = async (req: any, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;

  try {
    const photo = await Photo.findById(new mongoose.Types.ObjectId(id));
    // Check if photo exists
    if (!photo) {
      res
        .status(404)
        .json({ errors: ["Foto não encontrada em nossa base de dados!"] });
      return;
    }

    // Check if photo belongs to user
    if (!photo.userId || photo.userId.toString() !== req.user._id.toString()) {
      res
        .status(422)
        .json({ errors: ["Houve um problema, por favor tente novamente. 1"] });
      return;
    }

    if (title) {
      photo.title = title;
    }
    await photo.save();

    res.status(200).json({ photo, message: "Foto atualizada com sucesso!" });
  } catch (err) {
    res
      .status(422)
      .json({ errors: ["Houve um problema, por favor tente novamente."] });
  }
};

// Like photo
export const likePhoto = async (req: any, res: Response) => {
  const { id } = req.params;

  try {
    const photo = await Photo.findById(new mongoose.Types.ObjectId(id));
    // Check if photo exists
    if (!photo) {
      res
        .status(404)
        .json({ errors: ["Foto não encontrada em nossa base de dados!"] });
      return;
    }

    // Check if user already liked the photo
    if (photo.likes.includes(req.user._id)) {
      res.status(422).json({ errors: ["Você já curtiu a foto."] });
      return;
    }

    // Put user id in likes array
    photo.likes.push(req.user._id);

    photo.save();

    res.status(200).json({
      photoId: id,
      userId: req.user._id,
      message: "A foto foi curtida!",
    });
  } catch (err) {
    res
      .status(422)
      .json({ errors: ["Houve um problema, por favor tente novamente."] });
  }
};

// Comment photo
export const commentPhoto = async (req: any, res: Response) => {
  const { id } = req.params;
  const { comment } = req.body;

  try {
    const photo = await Photo.findById(new mongoose.Types.ObjectId(id));
    // Check if photo exists
    if (!photo) {
      res
        .status(404)
        .json({ errors: ["Foto não encontrada em nossa base de dados!"] });
      return;
    }

    const userComment = {
      comment,
      userName: req.user.name,
      userImage: req.user.profileImage,
      userId: req.user._id,
    };

    photo.comments.push(userComment);

    await photo.save();

    res.status(200).json({
      comment: userComment,
      message: "O comentario foi adicionado com sucesso",
    });
  } catch (err) {
    res
      .status(422)
      .json({ errors: ["Houve um problema, por favor tente novamente."] });
  }
};

// Search photos by title
export const searchPhotos = async (req: any, res: Response) => {
  const { q } = req.query;

  const photos = await Photo.find({ title: new RegExp(q, "i") }).exec();

  res.status(200).json(photos);
};
