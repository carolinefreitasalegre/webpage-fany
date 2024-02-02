import styled from "styled-components";
import BackImage from "../../assets/backimage02.png";

export const PlanSpace = styled.div`
  min-height: 100vh;
  padding: 0em 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  top: 0;
  left: 0;
  width: 100%;
  height: 50%; /* Defina a altura desejada para a imagem de fundo */
  background-image: url(${BackImage});
  background-size: 100% 50%; /* Ajuste conforme necessário */
  background-repeat: no-repeat;
  background-position: top center;
  z-index: -1; /* 





  /* background-size: 100% 50%;
  background-position: top center;
  padding: 0em 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(${BackImage});
  background-repeat: no-repeat;
  background-attachment: local;
  opacity: 0.5; */

  @media (max-width: 414px) {
    min-height: 170vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: 0%; /* Ajuste conforme necessário */
    background-repeat: no-repeat;
    background-position: top center;

    background-image: {
      display: none;
    }
    .container {
      flex-direction: column;
      height: 150vh;
      padding-left: 3em;
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
