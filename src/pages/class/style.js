import styled from "styled-components";
import BackImage from "../../assets/backimage.png";

export const ClassSpace = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ececec;

  @media (max-width: 414px) {
    min-height: 170vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      display: none;
    }

    .container {
      flex-direction: column;
      height: 150vh;
      padding-left: 3em;
      img {
        display: flex;
      }
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: #b3717b;
    font-weight: bold;
  }
`;
