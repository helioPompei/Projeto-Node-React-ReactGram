// Styles
import * as S from "./Photo.styles";
// Uploads
import { uploads } from "../../services/api";
// Components
import { Like } from "../../components/Like";
// React Router Dom
import { Link, useParams } from "react-router-dom";
// Hooks
import { useEffect, useState } from "react";
// Redux
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  commentPhoto,
  getPhoto,
  likePhoto,
} from "../../redux/slices/photoSlice";
import { PhotoItem } from "../../components/PhotoItem";

export const Photo = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.auth);
  const { photo } = useAppSelector((store) => store.photo);

  const [commentText, setCommentText] = useState("");

  // Load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  // Handle Like
  const handleLike = () => {
    console.log("id photo", photo._id);
    console.log("id user", user._id);
    dispatch(likePhoto(photo._id));
  };

  // Handle Comment
  const handleComment = (e) => {
    e.preventDefault();
    console.log(commentText);
    const photoData = {
      comment: commentText,
      id: photo._id,
    };

    console.log(photoData);

    dispatch(commentPhoto(photoData));
  };

  return (
    <S.OutSideContainer>
      <S.PhotoComponentContainer>
        <S.PhotoContainer>
          <PhotoItem photo={photo} />
          <Like photo={photo} user={user} handleLike={handleLike} />
        </S.PhotoContainer>

        <S.CommentsContainer>
          {photo.comments && (
            <>
              <form onSubmit={handleComment}>
                <h3>Comentários ({photo.comments.length}):</h3>
                <input
                  type="text"
                  placeholder="Insira seu comentário..."
                  onChange={(e) => setCommentText(e.target.value)}
                  value={commentText || ""}
                />
                <S.StyledButton type="submit">Enviar</S.StyledButton>
              </form>

              {photo.comments.length === 0 && <p>Não há comentários...</p>}
              {photo.comments.map((comment: any) => (
                <S.CommentsContent key={comment.comment}>
                  <S.Image>
                    {comment.userImage && (
                      <img
                        src={`${uploads}/users/${comment.userImage}`}
                        alt={comment.userName}
                      />
                    )}

                    <Link to={`/users/${comment.userId}`}>
                      <p>{comment.userName}</p>
                    </Link>
                  </S.Image>
                  <h2>{comment.comment}</h2>
                </S.CommentsContent>
              ))}
            </>
          )}
        </S.CommentsContainer>
      </S.PhotoComponentContainer>
    </S.OutSideContainer>
  );
};
