import * as S from "./styles";
import { RegisterForm } from "../../components/RegisterForm";

export const Register = () => {
  return (
    <S.RegisterContainer>
      <S.RegisterContent>
        <RegisterForm />
      </S.RegisterContent>
    </S.RegisterContainer>
  );
};
