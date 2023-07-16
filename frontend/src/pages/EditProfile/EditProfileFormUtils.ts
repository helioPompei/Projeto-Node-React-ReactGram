import { z } from "zod";

export const profileUserFormSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(8, "O nome precisa ter no minimo 8 caracteres"),

  email: z.string().optional(),

  bio: z.string().optional(),

  password: z.string().optional(),
});

export type ProfileUserFormData = z.infer<typeof profileUserFormSchema>;
