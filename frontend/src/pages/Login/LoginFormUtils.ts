import { z } from "zod";

// Schema do formulario de registro do zod
export const registerUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("O E-mail é obrigatório")
    .email("Formato de e-mail inválido"),

  password: z
    .string()
    .nonempty("Senha obrigatória")
    .min(8, "A senha precisa ter no minimo 8 caracteres"),
});

// Tipo do schema do formulario de registro
export type RegisterUserFormData = z.infer<typeof registerUserFormSchema>;
