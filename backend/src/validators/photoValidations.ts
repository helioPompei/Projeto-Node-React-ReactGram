import { body } from "express-validator";

export const photoInsertValidation = [
  body("title")
    .not()
    .equals("undefined")
    .withMessage("O título é obrigatório.")
    .isString()
    .withMessage("o título precisa ser uma String")
    .isLength({ min: 3 })
    .withMessage("O título precisa ter no mínimo 3 caracteres"),

  body("image").custom((value, { req }) => {
    if (!req.file) {
      throw new Error("A imagem é obrigatória.");
    }
    return true;
  }),
];
