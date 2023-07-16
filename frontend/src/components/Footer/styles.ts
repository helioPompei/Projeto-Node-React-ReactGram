import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(p) => p.theme.colors.footerColor};
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  min-height: 3em;

  color: ${(p) => p.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
