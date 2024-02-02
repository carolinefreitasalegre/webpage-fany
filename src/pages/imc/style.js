import styled from "styled-components";

export const ContainerB = styled.div`
  background-color: #ececec;


  @media (max-width: 414px) {
    height: 10vh;
    margin: auto;
    width: 100vw;
    align-items: center;

    img {
      position: relative;
      margin-left: -23em;
    }
  }
`;

export const ImcSpace = styled.div`
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 25em;
  width: 40%;

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

  @media (max-width: 414px) {
    margin: auto;
    width: 100%;
    height: 100%;
  }
`;
export const Text = styled.div`
  width: 22rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  margin-left: 5em;
  span {
    color: #b3717b;
    font-weight: bold;
  }

  @media (max-width: 414px) {
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    padding-left: 0;

  }
`;
