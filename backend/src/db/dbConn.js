import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.URL;

const connectToDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Conectou ao banco com sucesso!");
  } catch (err) {
    console.log("Erro ao conectar ao banco:", err);
  }
};

export default connectToDB;
