import styled from "styled-components";
import BackImage from "../../assets/backimage.png";

export const HomeSpace = styled.div`
  min-height: 80vh;
  padding: 0em 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

  &::before {
    content: "";
    position: absolute;
    top: 20;
    left: 0;
    width: 100%;
    height: 80vh;
    background-image: url(${BackImage});
    background-size: cover; 
    background-position: center; 
    background-attachment: fixed;
    opacity: 0.7; 
    z-index: -1; 
  }
  img {
    width: 5em;
  }
  button {
    background-color: #b3717b;
    padding: 5px;
    width: 10rem;
    height: 3rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: none;
    font-size: 17px;
    margin-top: 8px;

    &:hover {
      transition: all 1s linear;
      opacity: 0.5;
      font-size: 1em;
    }
  }
  h1 {
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #b3717b;
    color: white;
    font-size: 3rem;
    font-weight: bold;
    justify-content: center

    svg {
      color: #b3717b;
    }
    span {
      margin-left: 5px;
      color: #b3717b;
    }
  }
`;
