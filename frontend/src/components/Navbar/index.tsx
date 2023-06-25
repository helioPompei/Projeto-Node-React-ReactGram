import * as S from "./styles";

import { NavLink } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

export const Navbar = () => {
  return (
    <S.NavbarContainer>
      <div>Logo</div>
      <S.NavbarContent>
        <NavLink to="/"> ReactGram </NavLink>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/login"> Login </NavLink>
        <NavLink to="/register"> Register </NavLink>
      </S.NavbarContent>
    </S.NavbarContainer>
  );
};
