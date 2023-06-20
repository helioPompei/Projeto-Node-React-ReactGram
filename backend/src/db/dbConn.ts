import mongoose from "mongoose";

export const connectToDataBase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL!);
    console.log("Conectou ao banco.");
  } catch (err) {
    console.log("Erro ao conectar ao banco: ", err);
  }
};
