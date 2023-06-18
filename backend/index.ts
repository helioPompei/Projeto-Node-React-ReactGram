import app from "./src/app";
import dotenv from "dotenv";
dotenv.config();

const port: number = parseInt(process.env.PORT!) || 3333;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}!`);
});
