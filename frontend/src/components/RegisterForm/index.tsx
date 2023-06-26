import * as S from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { register as registerUser, reset } from "../../redux/slices/authSlice";

const registerUserFormSchema = z.object({
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

type RegisterUserFormData = z.infer<typeof registerUserFormSchema>;

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { loadding, error } = useSelector((store) => store.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserFormData>({
    resolver: zodResolver(registerUserFormSchema),
  });

  const handleRegisterSubmit = async (data: any) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <S.RegisterFormContainer>
      <h1>Cadastre-se para postar</h1>

      <p> Crie seu usuário e compartilhe suas histórias! </p>

      <form onSubmit={handleSubmit(handleRegisterSubmit)}>
        <label>
          <span>Nome:</span>
          <input
            placeholder="Digite seu nome..."
            type="text"
            {...register("name")}
          />
        </label>

        <label>
          <span>E-mail:</span>
          <input
            placeholder="Digite seu nome..."
            type="email"
            {...register("email")}
          />
        </label>

        <label>
          <span>Senha:</span>
          <input
            placeholder="Digite sua senha..."
            type="password"
            {...register("password")}
          />
        </label>

        <label>
          <span>Confirmação de senha:</span>
          <input
            placeholder="Confirme a sua senha..."
            type="password"
            {...register("confirm")}
          />
        </label>

        <button type="submit">Cadastrar</button>

        {errors.name && (
          <S.ErrorsContainer>{errors.name.message}</S.ErrorsContainer>
        )}
        {errors.email && (
          <S.ErrorsContainer>{errors.email.message}</S.ErrorsContainer>
        )}
        {errors.password && (
          <S.ErrorsContainer>{errors.password.message}</S.ErrorsContainer>
        )}
        {errors.confirm && (
          <S.ErrorsContainer>{errors.confirm.message}</S.ErrorsContainer>
        )}
      </form>

      {loadding ? <h1>LOADING TRUE</h1> : <h1>LOADING FALSE</h1>}
      {error && <h1>{error}</h1>}
    </S.RegisterFormContainer>
  );
};
