import { Container } from "@mui/material";
import React from "react";
import img from "../../assets/perfil.png";
import { PerfilSpace } from "./style";
import Button from "../../components/Button";

export function Presentation() {
  return (
    <Container>
      <PerfilSpace>
        <div data-aos="fade-right" data-aos-delay="160" data-aos-duration="900" className="divText">
          <h1>STEFANY DE OLIVEIRA</h1>
          <span>CREFI 011481-G/MS</span>
          <p>
            Formada em Educação Física com sólida base de conhecimento na área e
            Pós graduada em Personal Trainer e Treinamento Desportivo. <br />
            Com uma abordagem que incorpora princípios científicos avançados,
            combinados com a prática do treinamento personalizado, visando
            atender às necessidades específicas de cada indivíduo e treinamento
            desportivo.
          </p>

          <a
            class="whatsapp-link"
            href="https://web.whatsapp.com/send?phone=5567991299504"
            target="_blank"
          >
            <Button label="SABER MAIS"></Button>
          </a>
        </div>
        <img src={img} />
      </PerfilSpace>
    </Container>
  );
}
