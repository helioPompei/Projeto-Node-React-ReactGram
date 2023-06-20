import cors from "cors";
import express from "express";
import indexRoutes from "./routes";
import path from "path";
import { connectToDataBase } from "./db/dbConn";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Solve CORS
app.use(cors());

// Config JSON and Form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB connection
connectToDataBase();

// All Routes
app.use("/api", indexRoutes);

export default app;
