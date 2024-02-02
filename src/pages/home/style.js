import styled from "styled-components";
import BackImage from "../../assets/backimage.png";

export const HomeSpace = styled.div`
  height: 95vh;
  padding: 0em 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 765px) {
    h1 {
      text-align: left;
      flex-direction: column;
    }
    background-size: contain;
    margin: 0 auto;
  }
  @media (max-width: 434px) {
    font-size: 10px;
    align-items: center;
    justify-content: center;

 }

  &::before {
    content: "";
    position: absolute;
    top: 20;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 90vh;
    background-image: url(${BackImage});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    opacity: 0.5;
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
    gap: 1rem;
    color: #b3717b;
    color: black;
    text-shadow: 2px 2px 10px #b3717b;
    font-size: 3em;
    font-weight: bold;
    justify-content: center svg {
      color: #b3717b;
    }
    span {
      margin-left: 5px;
      color: #b3717b;
    }
  }
`;
