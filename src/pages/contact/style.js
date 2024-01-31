import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpaceContact = styled.div`
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;

  button {
    background-color: #b3717b;
    padding: 5px;
    width: 5rem;
    height: 2rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: none;
    font-size: 15px;
    margin-top: 8px;

    &:hover {
      transition: all 1s linear;
      opacity: 0.5;
      font-size: 1em;
    }
  }
`;
export const WebPages = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 60%;
  gap: 2em;
  cursor: pointer;

  div {
    display: flex;
    gap: 5px;
    align-items: center;
    transition: all 0.5s;

    &:hover {
      color: #b3717b;
    }
  }
`;
