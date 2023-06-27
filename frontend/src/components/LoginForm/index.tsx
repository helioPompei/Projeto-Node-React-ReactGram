import * as S from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux
import { login, reset } from "../../redux/slices/authSlice";

const registerUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("O E-mail é obrigatório")
    .email("Formato de e-mail inválido"),

  password: z
    .string()
    .nonempty("Senha obrigatória")
    .min(6, "A senha precisa ter no minimo 6 caracteres"),
});

type RegisterUserFormData = z.infer<typeof registerUserFormSchema>;

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { loadding, error } = useSelector((store) => store.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserFormData>({
    resolver: zodResolver(registerUserFormSchema),
  });

  const handleLoginSubmit = async (data: any) => {
    dispatch(login(data));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <S.RegisterFormContainer>
      <h1>Faça login para postar</h1>

      <p> Pipipi popopo </p>

      <form onSubmit={handleSubmit(handleLoginSubmit)}>
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

        <button type="submit">Login</button>

        {errors.email && (
          <S.ErrorsContainer>{errors.email.message}</S.ErrorsContainer>
        )}
        {errors.password && (
          <S.ErrorsContainer>{errors.password.message}</S.ErrorsContainer>
        )}
      </form>

      {loadding ? <h1>LOADING TRUE</h1> : <h1>LOADING FALSE</h1>}
      {error && <h1>{error}</h1>}
    </S.RegisterFormContainer>
  );
};
