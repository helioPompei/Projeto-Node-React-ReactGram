import { z } from "zod";

export const registerUserFormSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(6, "O nome precisa ter no minimo 6 caracteres"),

  email: z
    .string()
    .nonempty("O E-mail é obrigatório")
    .email("Formato de e-mail inválido"),

  password: z
    .string()
    .nonempty("Senha obrigatória")
    .min(6, "A senha precisa ter no minimo 6 caracteres"),

  confirm: z
    .string()
    .nonempty("Confirmação de senha obrigatória")
    .min(6, "A Confirmação de senha precisa ter no minimo 6 caracteres"),
});

export type RegisterUserFormData = z.infer<typeof registerUserFormSchema>;
