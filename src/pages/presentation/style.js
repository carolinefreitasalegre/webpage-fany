import styled from "styled-components";

export const PerfilSpace = styled.div`
  img {
    width: 25rem;
    max-width: 25rem;
  }
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  
  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
    width: 50%;
    height: 60vh;
    span {
      color: #b3717b;
      margin-bottom: 1em;
      font-weight: bold;
    }
    p {
      margin: 1.5em 0;
    }
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
`;
