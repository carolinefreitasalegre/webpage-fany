import styled from "styled-components";

export const ImcSpace = styled.header`
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
`;
export const Text = styled.div`
  width: 22rem;
  display: flex;
  flex-direction: column;
margin-bottom: 2em;
  span {
    color: #b3717b;
    font-weight: bold;
  }
`;
