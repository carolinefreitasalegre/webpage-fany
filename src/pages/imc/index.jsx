import React, { useState } from "react";
import { ImcSpace, Text, ContainerB } from "./style";
import Container from "@mui/material/Container";
import BackImage from "../../assets/backimage03.png";
import Form from "react-bootstrap/Form";
import Button from "../../components/Button";

export default function Imc() {
  const [formData, setFormData] = useState({
    nome: "",
    altura: "",
    peso: "",
    genero: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (e) => {
    setFormData({ ...formData, genero: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faça algo com os dados do formulário, por exemplo, envie para um servidor
    console.log("Dados do formulário:", formData);
  };
  
  return (
    <ContainerB>
      <Container
        className="container"
        width="100vw"
        style={{
          backgroundColor: "#ECECEC",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          overflow: "hidden",
          position: "relative",
         
        }}
      >
        <img className="img"
          src={BackImage}
          alt="personal image"
          style={{
            width: "30em",
            opacity: "0.5",
            position: "absolute",
            bottom: 0,
            left: "20em",
          }}
        />
        <ImcSpace>
          <Text>
            <h3>CALCULE SEU IMC</h3>
            <span>
              Digite seu peso e altura para avaliação da saúde ponderal.
            </span>
          </Text>

          <Form className="col-md-7" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Altura</Form.Label>
              <Form.Control
                type="number"
                placeholder="cm"
                name="altura"
                value={formData.altura}
                onChange={handleInputChange}
                maxLength={3}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Peso</Form.Label>
              <Form.Control
                type="number"
                placeholder="kg"
                name="peso"
                value={formData.peso}
                onChange={handleInputChange}
                maxLength={3}
              />
            </Form.Group>

            <div>
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Feminino"
                      name="genero"
                      type={type}
                      value="feminino"
                      onChange={handleGenderChange}
                    />

                    <Form.Check
                      inline
                      label="Masculino"
                      name="genero"
                      type={type}
                      value="masculino"
                      onChange={handleGenderChange}
                    />
                  </div>
                ))}
              </Form>
            </div>

            <button type="submit">Enviar</button>
          </Form>
        </ImcSpace>
      </Container>
    </ContainerB>
  );
}


<style>
  
</style>