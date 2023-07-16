// Styles
import * as S from "./styles";
// Components
import { PhotoItem } from "../../components/PhotoItem";
import { Like } from "../../components/Like";
// Hooks
import { useEffect } from "react";
// Redux
import { getAllPhotos, likePhoto } from "../../redux/slices/photoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
// React Icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";

// Component Home
export const Home = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);
  const { photos, loadding } = useAppSelector((state) => state.photo);

  // Load all photos
  useEffect(() => {
    dispatch(getAllPhotos());
  }, [dispatch]);

  const handleLike = (photo: any) => {
    dispatch(likePhoto(photo._id));
  };

  if (loadding) {
    return <p>Carregando...</p>;
  }
  return (
    <S.OutSideContainer>
      <S.HomeContainer>
        {photos &&
          photos.map((photo: any) => (
            <S.PhotoContainer key={photo._id}>
              <PhotoItem photo={photo} />
              <Like photo={photo} user={user} handleLike={handleLike} />
              <S.StyledLink to={`/photos/${photo._id}`}>
                Ver mais <BsFillArrowRightCircleFill />
              </S.StyledLink>
            </S.PhotoContainer>
          ))}

        {photos && photos.length === 0 && (
          <h2>
            Ainda não há fotos publicadas clique abaixo para começar!
            <S.StyledLink to={`/users/${user.userId}`}>
              <BsFillArrowRightCircleFill />
            </S.StyledLink>
          </h2>
        )}
      </S.HomeContainer>
    </S.OutSideContainer>
  );
};
