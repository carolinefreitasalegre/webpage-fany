import styled from "styled-components";

export const HeaderSpace = styled.header`
  width: 100%;
  padding: 0em 1rem;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 765px) {
    svg {
      color: red;
  }
  }
  img {
    margin-top: 1em;
    width: 4em;
  }
  span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1rem;
    font-weight: bold;

    a {
      display: flex;
      gap: 5px;
      color: "#b3717b";
      text-decoration: none;
    }

    svg {
      color: #b3717b;
      font-size: 2em;
    }
  }
`;
