// Styles
import * as S from "./styles";
// React Hook form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Zod Utils
import {
  ProfileUserFormData,
  profileUserFormSchema,
} from "./EditProfileFormUtils";
// Hooks React
import { ChangeEvent, useEffect, useState } from "react";
// Redux
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  profile,
  resetMessage,
  updateProfile,
} from "../../redux/slices/userSlice";
// Utils
import { uploads } from "../../services/api";
// Components
import { Error } from "../../components/Error";
import { Message } from "../../components/Message";

export const EditProfile = () => {
  // UseHooks and get states
  const dispatch = useAppDispatch();
  const { user, loadding, error, message } = useAppSelector(
    (store) => store.user
  );
  const [previewImage, setPreviewImage] = useState<File | undefined>(undefined);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileUserFormData>({
    resolver: zodResolver(profileUserFormSchema),
  });

  // Load user data
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  // Fill form with user data
  useEffect(() => {
    if (user.name) {
      setValue("name", user.name);
    }
    if (user.email) {
      setValue("email", user.email);
    }
    if (user.bio) {
      setValue("bio", user.bio);
    }
  }, [user]);

  // Reset message
  setTimeout(() => {
    dispatch(resetMessage());
  }, 3000);

  // Profile submit
  const handleEditProfileSubmit = (data: any) => {
    const formData = new FormData();

    if (previewImage) {
      formData.append("profileImage", previewImage);
    }
    if (data.name) {
      formData.append("name", data.name);
    }
    if (data.email) {
      formData.append("email", data.email);
    }
    if (data.bio) {
      formData.append("bio", data.bio);
    }
    if (data.password) {
      formData.append("password", data.password);
    }
    if (data.confirm) {
      formData.append("confirm", data.confirm);
    }

    dispatch(updateProfile(formData));
  };

  // Preview image handle file
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    // Image preview
    const file = e.target.files?.[0];
    setPreviewImage(file);
  };

  return (
    <S.OutSideContainer>
      <S.ProfileContainer>
        <S.FormContainer>
          <S.TitleFormDiv>
            <h1>Edite seus dados!</h1>
            <p>Adicione uma imagem de perfil e conte mais sobre voce!</p>
          </S.TitleFormDiv>

          <form onSubmit={handleSubmit(handleEditProfileSubmit)}>
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
                disabled
                {...register("email")}
              />
            </label>

            <S.Image>
              {(user.profileImage || previewImage) && (
                <img
                  src={
                    previewImage
                      ? URL.createObjectURL(previewImage)
                      : `${uploads}/users/${user.profileImage}`
                  }
                />
              )}
            </S.Image>

            <label>
              <span>Imagem de Perfil:</span>
              <input type="file" onChange={handleFile} />
            </label>

            <label>
              <span>Bio:</span>
              <input
                placeholder="Digite sua biografia..."
                type="text"
                {...register("bio")}
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
              <button type="submit">Atualizar</button>
            )}

            {message && <Message msg={message} />}

            {errors.name && <Error errorMsg={errors.name.message} />}
            {errors.email && <Error errorMsg={errors.email.message} />}
            {errors.password && <Error errorMsg={errors.password.message} />}
            {errors.bio && <Error errorMsg={errors.bio.message} />}
            {error && <Error errorMsg={error} />}
          </form>
        </S.FormContainer>
      </S.ProfileContainer>
    </S.OutSideContainer>
  );
};
