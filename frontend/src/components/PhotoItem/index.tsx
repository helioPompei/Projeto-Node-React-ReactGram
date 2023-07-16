// Styles
import * as S from "./PhotoItem.styles";
// Uploads Utils
import { uploads } from "../../services/api";
// React Router DOM
import { Link } from "react-router-dom";

export const PhotoItem = ({ photo }: { photo: any }) => {
  return (
    <S.PhotoContainer>
      {photo.image && (
        <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
      )}
      <h2>{photo.title}</h2>
      <p>
        Publicada por:{" "}
        <Link to={`/users/${photo.userId}`}>{photo.userName}</Link>
      </p>
    </S.PhotoContainer>
  );
};
