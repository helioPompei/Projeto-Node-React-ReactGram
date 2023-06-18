import cors from "cors";
import express from "express";

const app = express();

// Solve CORS
app.use(cors());

// Config JSON and Form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
