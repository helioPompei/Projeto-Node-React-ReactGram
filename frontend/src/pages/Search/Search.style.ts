import styled from "styled-components";
import { Link } from "react-router-dom";

export const OutSideContainer = styled.div`
  background-color: ${(p) => p.theme.colors.background};
`;

export const SearchContainer = styled.div`
  h2 {
    padding-top: 1em;
  }

  margin: 0 auto;
  max-width: 1280px;
  min-height: 870px;
  background-color: ${(p) => p.theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhotoContainer = styled.div`
  margin: 2em;
  border: 1px solid black;
  padding: 1em;
`;

export const StyledLink = styled(Link)`
  margin-top: 0.5em;
  border: 1px solid black;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
  font-size: 1.2em;
  padding: 0.1em;

  &:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;
