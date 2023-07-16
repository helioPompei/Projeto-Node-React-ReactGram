import styled from "styled-components";
import { Link } from "react-router-dom";

export const OutSideContainer = styled.div`
  background-color: ${(p) => p.theme.colors.background};
`;

export const PhotoComponentContainer = styled.div`
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

export const CommentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  form {
    input {
      margin-top: 1em;
      padding: 0.5em;
    }

    display: flex;
    flex-direction: column;
    width: 450px;
  }
`;

export const CommentsContent = styled.div`
  display: flex;
  padding-left: 5em;
  width: 100%;
  border: 1px solid black;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  margin: 1em;

  div a p {
    text-decoration: none;
  }

  p {
    font-size: large;
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3em;

  img {
    border: 1px solid black;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: center;
  }
`;

// Button Styled
export const StyledButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${(p) => p.theme.colors.securandy};
  color: #fff;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
