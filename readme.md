# App

Instagram style app.

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco MongoDB;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);

# Notes

## Dependencies

- npm init -y
- npx tsc --init
- npm i -D ts-node-dev
- npm i -D typescript
- npm i -D @types/node
- npm i -D @types/express

- npm i express
- npm i bcrypt
- npm i cors
- npm i dotenv
- npm i express-validator
- npm i jsonwebtoken
- npm i mongoose
- npm i multer

## Scripts

"scripts": {
"dev": "ts-node-dev --respawn --transpile-only src/app.ts"
}
