import { LoginForm } from "../../components/LoginForm";
import * as S from "./styles";

export const Login = () => {
  return (
    <S.LoginContainer>
      <S.LoginContent><LoginForm></LoginForm></S.LoginContent>
    </S.LoginContainer>
  );
};
