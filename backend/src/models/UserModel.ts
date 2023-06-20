import { timeStamp } from "console";
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
