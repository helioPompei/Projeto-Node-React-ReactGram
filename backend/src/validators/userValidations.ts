import { body } from "express-validator";

export const userLoginValidator = [
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

export const userRegisterValidator = [
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

export const userAuthenticateValidator = [
  body("token")
    .trim()
    .notEmpty()
    .withMessage("Token não pode estar vazio!")
    .isString()
    .withMessage("O Token precisa ser uma string!"),
];
