import styled from "styled-components";

export const OutSideContainer = styled.div`
  background-color: ${(p) => p.theme.colors.background};
`;

export const ProfileContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  min-height: 1000px;
  background-color: ${(p) => p.theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  border: 2px solid black;
  min-height: 650px;
  width: 500px;
  padding: 2.5em;
  background-color: ${(p) => p.theme.colors.primary};

  box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.2);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    label {
      width: 100%;
      margin-top: 8px;
    }

    label span {
      font-size: larger;
    }

    label input {
      width: 100%;
      padding: 0.5em;
      border-radius: 3px;
    }

    button {
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
    }
  }
`;

export const TitleFormDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.div`
  margin: 2em;
  img {
    border: 1px solid black;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: center;
  }
`;
