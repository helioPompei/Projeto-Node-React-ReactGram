import mongoose from "mongoose";

export type userType = {
  id: mongoose.Types.ObjectId;
  email: string;
};
