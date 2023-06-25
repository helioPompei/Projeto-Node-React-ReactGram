import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(p) => p.theme.colors.gray["gray-600"]};
  min-height: 3em;
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  min-height: 3em;

  color: ${(p) => p.theme.colors.gray["gray-100"]};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
`;
