import { Container } from "@mui/material";
import React from "react";
import img from "../../assets/perfil.png";
import { PerfilSpace } from "./style";
import Button from "../../components/Button";

export function Presentation() {
  const handleClick = () => {
    alert("clicou");
  };
  return (
    <Container>
      <PerfilSpace>
        <div data-aos="fade-right" data-aos-delay="160" data-aos-duration="900">
          <h1>STEFANY DE OLIVEIRA</h1>
          <span>CREFI 011481-G/MS</span>
          <p>
            Formada em Educação Física com sólida base de conhecimento na área E
            Pós graduada em Personal Trainer e Treinamento Desportivo. Com uma
            abordagem que incorpora princípios científicos avançados, combinados
            com a prática do treinamento personalizado, visando atender às
            necessidades específicas de cada indivíduoer e treinamento
            desportivo.
          </p>
          <Button onClick={handleClick} label="SABER MAIS" />
        </div>
        <img src={img} />
      </PerfilSpace>
    </Container>
  );
}
