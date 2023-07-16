// Styles
import * as S from "./styles";
// React Hook form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Zod Utils
import { RegisterUserFormData, registerUserFormSchema } from "./LoginFormUtils";
// Hooks React
import { useEffect } from "react";
// Redux
import { login, reset } from "../../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
// Components
import { Error } from "../../components/Error";

export const Login = () => {
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

  // Handle Login submit function
  const handleLoginSubmit = async (data: any) => {
    dispatch(login(data));
  };

  // Reset all states when dispatch happens
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <S.OutSideContainer>
      <S.LoginContainer>
        <S.FormContainer>
          <form onSubmit={handleSubmit(handleLoginSubmit)}>
            <S.TitleFormDiv>
              <h1>ReactGram</h1>
              <p> Entre e compartilhe sua historia! </p>
            </S.TitleFormDiv>

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

            {loadding ? (
              <button type="submit" disabled>
                Aguarde...
              </button>
            ) : (
              <button type="submit">Login</button>
            )}

            {errors.email && <Error errorMsg={errors.email.message} />}
            {errors.password && <Error errorMsg={errors.password.message} />}
            {error && <Error errorMsg={error} />}
          </form>
        </S.FormContainer>
      </S.LoginContainer>
    </S.OutSideContainer>
  );
};
