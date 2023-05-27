import mongoose from "mongoose";
const { Schema } = mongoose;

const photoSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    likes: {
      type: Array,
    },
    comments: {
      type: Array,
    },
    userId: {
      type: mongoose.ObjectId,
    },
    userName: {
      type: String,
    },
  },
  { timestamps: true }
);

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;
