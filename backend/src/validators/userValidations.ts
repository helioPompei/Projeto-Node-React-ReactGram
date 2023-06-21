import { body } from "express-validator";

export const userLoginValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email não pode estar vazio!")
    .isString()
    .withMessage("O email precisa ser uma string!")
    .isEmail()
    .withMessage("Insira um email valido!"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Senha não pode estar vazia!")
    .isLength({ min: 8 })
    .withMessage("A senha deve ter pelo menos 8 caracteres")
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9]).{8,}$/)
    .withMessage(
      "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    ),
];

export const userRegisterValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Nome não pode estar vazio!")
    .isString()
    .withMessage("O nome precisa ser uma string!")
    .isLength({ min: 2, max: 50 })
    .withMessage("Nome precisa ter entre 2 a 50 caracteres!"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email não pode estar vazio!")
    .isString()
    .withMessage("O email precisa ser uma string!")
    .isEmail()
    .withMessage("Insira um email valido!"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Senha não pode estar vazia!")
    .isLength({ min: 8 })
    .withMessage("A senha deve ter pelo menos 8 caracteres")
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9]).{8,}$/)
    .withMessage(
      "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    ),

  body("confirm")
    .trim()
    .notEmpty()
    .withMessage("Confirmação de senha não pode estar vazia!")
    .custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error("As senhas não são iguais!");
      }
      return true;
    }),
];

export const userUpdateValidation = [
  body("name")
    .optional()
    .isLength({ min: 2, max: 50 })
    .withMessage("Nome precisa ter entre 2 a 50 caracteres!")
    .isString()
    .withMessage("O nome precisa ser uma string!"),

  body("password")
    .trim()
    .optional()
    .isLength({ min: 8 })
    .withMessage("A senha deve ter pelo menos 8 caracteres")
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9]).{8,}$/)
    .withMessage(
      "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    ),

  body("confirm")
    .trim()
    .optional()
    .custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error("As senhas não são iguais!");
      }
      return true;
    }),

  body("bio")
    .trim()
    .optional()
    .isString()
    .withMessage("A bio precisa ser uma string!")
    .isLength({ min: 5, max: 100 })
    .withMessage("A bio precisa ter entre 5 a 100 caracteres!"),
];
