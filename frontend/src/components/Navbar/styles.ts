import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: ${(p) => p.theme.colors.gray["gray-100"]};
  min-height: 3em;
`;

export const NavbarContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 3em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
`;
