import styled from "styled-components";
import BackImage from "../../assets/backimage02.png";

export const PlanSpace = styled.div`
  min-height: 89vh;
  padding: 0em 1rem;
  background-color: white,;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  &::before {
    content: "";
    position: absolute;
    top: 1;
    left: 0;
    width: 100%;
    height: 50vh;
    margin-top: -18em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    background-image: url(${BackImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    opacity: 0.7;
    z-index: -1;
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
  `