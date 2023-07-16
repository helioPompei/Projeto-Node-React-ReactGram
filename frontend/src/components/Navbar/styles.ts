import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: ${(p) => p.theme.colors.navColor};
  color: white;
`;

export const NavbarContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.colors.navColor};

  a {
    color: white;
    text-decoration: none;
    margin: 10px;
  }
`;

export const LogoContainer = styled.div`
  a {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 300;
  }

  div {
    display: flex;
    align-items: center;
    border: 1px solid white;
    padding: 5px;
  }

  div svg {
    cursor: pointer;
    font-size: 2rem;
    font-weight: 300;
  }

  div span {
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 300;
  }
`;
