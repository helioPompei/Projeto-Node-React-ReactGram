import express from "express";
import path from "path";
import cors from "cors";
import connectToDB from "./db/dbConn.js";
import indexRouter from "./routes/index.js";

const app = express();

// Config JSON and Form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solve CORS problem
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// Upload directory
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB connection
connectToDB();

// Rotas
app.use(indexRouter);

export default app;
