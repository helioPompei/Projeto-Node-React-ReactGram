// Styles
import * as S from "./styles";
// React Hook form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Zod Utils
import {
  RegisterUserFormData,
  registerUserFormSchema,
} from "./RegisterFormUtils";
// Hooks React
import { useEffect } from "react";
// Redux
import { register as registerUser, reset } from "../../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
// Components
import { Error } from "../../components/Error";

export const Register = () => {
  // UseHooks and get states
  const dispatch = useAppDispatch();
  const { loadding, error } = useAppSelector((store) => store.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserFormData>({
    resolver: zodResolver(registerUserFormSchema),
  });

  // Handle Register submit function
  const handleRegisterSubmit = async (data: any) => {
    dispatch(registerUser(data));
  };

  // Reset all states when dispatch happens
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <S.OutSideContainer>
      <S.RegisterContainer>
        <S.FormContainer>
          <S.TitleFormDiv>
            <h1>Cadastre-se para postar</h1>

            <p> Crie seu usuário e compartilhe suas histórias! </p>
          </S.TitleFormDiv>

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

            {loadding ? (
              <button type="submit" disabled>
                Aguarde...
              </button>
            ) : (
              <button type="submit">Cadastrar</button>
            )}

            {errors.name && <Error errorMsg={errors.name.message} />}
            {errors.email && <Error errorMsg={errors.email.message} />}
            {errors.password && <Error errorMsg={errors.password.message} />}
            {errors.confirm && <Error errorMsg={errors.confirm.message} />}
            {error && <Error errorMsg={error} />}
          </form>
        </S.FormContainer>
      </S.RegisterContainer>
    </S.OutSideContainer>
  );
};
