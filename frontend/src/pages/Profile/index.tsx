// Styles
import * as S from "./styles";
// React Hook form
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// Zod Utils
// import { PhotoFormData, photoFormSchema } from "./ProfileFormUtils";
// Hooks React
import { ChangeEvent, useEffect, useState } from "react";
// Redux
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getUserDetails } from "../../redux/slices/userSlice";
// Utils
import { uploads } from "../../services/api";
// Components
import { Error } from "../../components/Error";
import { Message } from "../../components/Message";
// React router dom
import { useParams, Link } from "react-router-dom";
import {
  deletePhoto,
  getUserPhotos,
  publish,
  resetMessage,
  updatePhoto,
} from "../../redux/slices/photoSlice";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";

export const Profile = () => {
  const { id } = useParams();
  const [editImage, setEditImage] = useState();
  const [editID, setEditId] = useState();
  const [title, setTitle] = useState("");
  const [previewImage, setPreviewImage] = useState<File | undefined>(undefined);

  const dispatch = useAppDispatch();

  const [visible, setIsVisible] = useState(false);

  const { user, loadding } = useAppSelector((store) => store.user);
  const { user: userAuth } = useAppSelector((store) => store.auth);
  const {
    photos,
    loadding: loadingPhoto,
    error: errorPhoto,
    message: messagePhoto,
  } = useAppSelector((store) => store.photo);

  // Load user data
  useEffect(() => {
    dispatch(getUserDetails(id));
    dispatch(getUserPhotos(id));
  }, [dispatch, id]);

  // Preview image handle file
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    // Image preview
    const file = e.target.files?.[0];
    setPreviewImage(file);
  };

  // Profile submit
  const handlePhotoSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", previewImage!);
    formData.append("title", title!);
    console.log("formData", formData);

    for (const data of formData.entries()) {
      console.log(`${data[0]} = ${data[1]}`);
    }
    dispatch(publish(formData));
    resetComponentMessage();
  };

  // Reset message
  const resetComponentMessage = () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 3000);
  };

  // Handle Delete photo
  const handleDelete = (id: any) => {
    dispatch(deletePhoto(id));
    resetComponentMessage();
  };

  // ------------ EDIT HANDLE FUNCTIONS ----------

  // Handle edit photo
  const handleEdit = (photo: any) => {
    setIsVisible(true);
    setEditId(photo._id);
    setTitle(photo.title);
    setEditImage(photo.image);
  };

  // Handle Update
  const handleUpdate = (e: any) => {
    e.preventDefault();
    const photoData = {
      title: title,
      id: editID,
    };
    dispatch(updatePhoto(photoData));
  };

  // Handle cancel edit
  const handleCancelAndHide = () => {
    setIsVisible(false);
  };

  return (
    <S.OutSideContainer>
      <S.ProfileContainer>
        {/* Titulo */}
        <S.TitleProfile>
          <S.Image>
            {user.profileImage && (
              <img
                src={`${uploads}/users/${user.profileImage}`}
                alt={user.name}
              />
            )}
          </S.Image>
          <div>
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
          </div>
        </S.TitleProfile>

        {id === userAuth._id && (
          <>
            <S.newFormContainer visible={visible}>
              <form onSubmit={handlePhotoSubmit}>
                <h2>Compartilhe algum momento seu:</h2>

                <S.photoItemContainer>
                  {previewImage && (
                    <img
                      src={previewImage && URL.createObjectURL(previewImage)}
                    />
                  )}
                </S.photoItemContainer>

                <label>
                  <span>Titulo para a foto:</span>
                  <input
                    placeholder="Digite o titulo da foto..."
                    type="text"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      console.log(title);
                    }}
                  />
                </label>

                <label>
                  <span>Foto:</span>
                  <input type="file" onChange={handleFile} />
                </label>

                {loadding ? (
                  <S.StyledButton type="submit" disabled>
                    Aguarde...
                  </S.StyledButton>
                ) : (
                  <S.StyledButton type="submit">Postar</S.StyledButton>
                )}
              </form>
            </S.newFormContainer>

            <S.EditFormContainer visible={visible}>
              <div>
                <S.photoItemContainer>
                  <h1>Editando:</h1>
                  {editImage && <img src={`${uploads}/photos/${editImage}`} />}
                </S.photoItemContainer>
                <form onSubmit={handleUpdate}>
                  <label>
                    <span>Titulo para a foto:</span>
                    <input
                      placeholder="Digite o titulo da foto..."
                      type="text"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                        console.log(title);
                      }}
                    />
                  </label>

                  <S.StyledButton type="submit">Atualizar</S.StyledButton>
                </form>
                <S.StyledButton onClick={handleCancelAndHide}>
                  Cancelar edição
                </S.StyledButton>
              </div>
            </S.EditFormContainer>
            {messagePhoto && <Message msg={messagePhoto} />}

            {errorPhoto && <Error errorMsg={errorPhoto} />}
          </>
        )}
        {/*FORMULARIO DO USUARIO AUTENTICADO ACIMA PARA ELE PUBLICAR A FOTO E ABAIXO A LISTAGEM DAS FOTOS */}

        <h1>Fotos publicadas</h1>
        <S.ListPhotosContainer>
          {photos &&
            photos.map((photo: any) => (
              <div key={photo._id}>
                {photo.image && (
                  <S.photoItemContainer>
                    <img
                      src={`${uploads}/photos/${photo.image}`}
                      alt={photo.title}
                    />
                  </S.photoItemContainer>
                )}

                {id === userAuth._id ? (
                  <S.editGearsContainer>
                    <Link to={`/photos/${photo._id}`}>
                      <BsFillEyeFill />
                    </Link>
                    <BsPencilFill onClick={() => handleEdit(photo)} />
                    <BsXLg
                      style={{ color: "red" }}
                      onClick={() => handleDelete(photo._id)}
                    />
                  </S.editGearsContainer>
                ) : (
                  <Link to={`/photos/${photo._id}`}>Ver</Link>
                )}
              </div>
            ))}
          {photos.length === 0 && <p>Ainda não há fotos publicadas...</p>}
        </S.ListPhotosContainer>
      </S.ProfileContainer>
    </S.OutSideContainer>
  );
};
