import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const handleValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const erros = validationResult(req);

  if (erros.isEmpty()) {
    return next();
  }

  const extractedErrors: String[] = [];

  erros.array().map((err) => {
    extractedErrors.push(err.msg);
  });

  return res.status(422).json({ erros: extractedErrors });
};
