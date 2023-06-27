import * as S from "./styles";

import { NavLink } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";
// hooks
import { useState } from "react";
import { useAuth } from "../../hooks/authHook";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Redux
import { logout, reset } from "../../redux/slices/authSlice";

export const Navbar = () => {
  const { auth } = useAuth();
  const { user } = useSelector((store) => store.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  };

  return (
    <S.NavbarContainer>
      <S.NavbarContent>
        <div>Logo</div>
        {auth ? (
          <>
            <NavLink to="/"> ReactGram </NavLink>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <div onClick={handleLogout}>SAIR</div>
          </>
        ) : (
          <>
            <NavLink to="/"> ReactGram </NavLink>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/login"> Login </NavLink>
            <NavLink to="/register"> Register </NavLink>
          </>
        )}
      </S.NavbarContent>
    </S.NavbarContainer>
  );
};
