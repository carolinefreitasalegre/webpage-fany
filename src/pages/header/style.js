import styled from "styled-components";

export const HeaderSpace = styled.header`
  width: 100%;
  padding: 0em 1rem;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-top: 1em;
    width: 5em;
  }
  span {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #b3717b;
    font-size: 1rem;
    font-weight: bold;

    svg {
      color: #b3717b;
    }
  }
`;
