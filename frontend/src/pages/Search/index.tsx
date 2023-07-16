// Styles
import * as S from "./Search.style";
// Hooks
import { useQuery } from "../../hooks/useQuery";
import { useEffect } from "react";
// components
import { Like } from "../../components/Like";
import { PhotoItem } from "../../components/PhotoItem";
// React Icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// Redux
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { likePhoto, searchPhotos } from "../../redux/slices/photoSlice";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);
  const { photos, loadding } = useAppSelector((state) => state.photo);

  // Load all photos
  useEffect(() => {
    dispatch(searchPhotos(search));
  }, [dispatch, search]);

  // Handle Like
  const handleLike = (photo: any) => {
    dispatch(likePhoto(photo._id));
  };

  if (loadding) {
    return <p>Carregando...</p>;
  }

  return (
    <S.OutSideContainer>
      <S.SearchContainer>
        <h2>Você está buscando por: {search}</h2>
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
      </S.SearchContainer>
    </S.OutSideContainer>
  );
};

export default Search;
