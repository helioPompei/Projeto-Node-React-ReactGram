import styled from "styled-components";

export const PhotoContainer = styled.div`
  margin-bottom: 1em;

  img {
    border: 1px solid black;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    height: 600px;
    width: 400px;

    object-fit: cover;
    object-position: center;
  }

  h2 {
    font-weight: bold;
  }

  p a {
    color: blue;
    text-decoration: none;
  }
`;
