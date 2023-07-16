import * as S from "./styles";

export const Error = ({ errorMsg }: { errorMsg: any }) => {
  return <S.ErrorsContainer>{errorMsg}</S.ErrorsContainer>;
};
