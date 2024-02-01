import styled from "styled-components";
import BackImage from "../../assets/backimage04.png";

export const Container = styled.div`
  /* background-color: black; */
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 20;
    left: 0;
    width: 100%;
    height: 90vh;
    background-image: url(${BackImage});
    background-size: 110%;
    background-position: center;
    background-attachment: fixed;
    opacity: 0.5;
    z-index: -1;
  }
`;

export const SpaceContact = styled.div`
  color: black;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  height: 10%;
  gap: 5px;
  cursor: pointer;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
    transition: all 0.5s;
    color: black;

    &:hover {
      color: #b3717b;
    }
  }
`;
