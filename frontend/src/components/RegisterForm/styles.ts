import styled from "styled-components";

export const RegisterFormContainer = styled.div`
  height: 40em;
  width: 30em;
  background: #8bc34a;
  padding: 1em;

  form {
    padding-top: 1em;
    display: flex;
    flex-direction: column;

    span {
      display: block;
    }

    input {
      padding: 0.5em;
      width: 100%;
      border-radius: 3px;
    }

    button {
      display: block;
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #333;
      color: #fff;
      border: none;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        background-color: #555;
        transform: translateY(-3px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

export const RegisterForm = styled.div``;

export const ErrorsContainer = styled.div``;
