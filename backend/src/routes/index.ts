import express from "express";
const indexRoutes = express.Router();

// User routes
import { userRouter } from "./userRouter";
indexRoutes.use("/user", userRouter);

// Photo routes
import { photoRouter } from "./photoRouter";
indexRoutes.use("/photo", photoRouter);

export default indexRoutes;
