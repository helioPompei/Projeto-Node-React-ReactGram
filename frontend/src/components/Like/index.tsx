// Styles
import * as S from "./Like.Styles";
// React Icons
import { BsHeart, BsHeartFill } from "react-icons/bs";

// Component
export const Like = ({ photo, user, handleLike }: any) => {
  return (
    <S.LikeContainer>
      {photo.likes && user && (
        <>
          {photo.likes.includes(user._id) ? (
            <BsHeartFill style={{ color: "red" }} />
          ) : (
            <BsHeart onClick={() => handleLike(photo)} />
          )}
          <p>{photo.likes.length} like(s)</p>
        </>
      )}
    </S.LikeContainer>
  );
};
