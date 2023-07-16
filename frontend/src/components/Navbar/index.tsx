// Styles
import * as S from "./styles";
// React Router DOM
import { NavLink, useNavigate } from "react-router-dom";
// Icons
import { BsFillCameraFill, BsHouseFill, BsPersonCircle } from "react-icons/bs";
import { RiLogoutBoxRFill } from "react-icons/ri";
// Redux
import { logout, reset } from "../../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useState } from "react";

// NavBar componenet
export const Navbar = () => {
  const { user } = useAppSelector((store) => store.auth);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  console.log('u',user)

  return (
    <S.NavbarContainer>
      <S.NavbarContent>
        <S.LogoContainer>
          <NavLink to="/"> ReactGram </NavLink>
        </S.LogoContainer>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Pesquisar"
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        {user ? (
          <S.LinksContainer>
            <NavLink to="/">
              <BsHouseFill />
            </NavLink>

            <NavLink to="/profile">
              <BsPersonCircle />
            </NavLink>

            {user._id && (
              <NavLink to={`/users/${user._id}`}>
                <BsFillCameraFill />
              </NavLink>
            )}

            <div onClick={handleLogout}>
              <span>sair</span>
              <RiLogoutBoxRFill />
            </div>
          </S.LinksContainer>
        ) : (
          <S.LinksContainer>
            <NavLink to="/login"> Login </NavLink>

            <NavLink to="/register"> Register </NavLink>
          </S.LinksContainer>
        )}
      </S.NavbarContent>
    </S.NavbarContainer>
  );
};
