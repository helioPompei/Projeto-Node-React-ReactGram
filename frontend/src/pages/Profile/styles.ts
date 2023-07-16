import styled from "styled-components";
type ContainerProps = {
  visible: boolean;
};

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
  flex-direction: column;
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

export const TitleProfile = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  border-bottom: 2px solid black;
  width: 100%;
`;

export const newFormContainer = styled.div<ContainerProps>`
  display: ${(props) => (props.visible ? "none" : "flex")};
  border: 1px solid black;
  padding: 1em;
  min-height: 650px;
  width: 500px;
  margin-top: 2em;

  form {
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
  }
`;

export const EditFormContainer = styled.div<ContainerProps>`
  border: 1px solid black;
  padding: 1em;
  min-height: 650px;
  width: 500px;
  margin-top: 2em;

  display: ${(props) => (props.visible ? "flex" : "none")};

  form {
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
  }
`;

export const ListPhotosContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 1.6em;
  width: 100%;
  flex-wrap: wrap;
`;

export const editGearsContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  font-size: 1.4em;
  width: 100%;

  svg {
    padding-top: 5px;
  }
`;

export const photoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border: 1px solid black;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    height: 450px;
    width: 300px;
    object-fit: cover;
    object-position: center;
  }

  margin-bottom: 0.5em;
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
