import React, { useState } from "react";
import { ImcSpace, Text } from "./style";
import Container from "@mui/material/Container";
import BackImage from "../../assets/backimage03.png";
import Form from "react-bootstrap/Form";
import Button from "../../components/Button";

export default function Imc() {
  const handleClick = () => {
    alert("Clicou");
  };

  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Container
      maxWidth="xl"
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
      <img
        src={BackImage}
        alt="personal image"
        style={{
          width: "30em",
          position: "absolute",
          bottom: 0,
          left: "20em",
        }}
        S
      />
      <ImcSpace>
        <Text>
          <h3>CALCULE SEU IMC</h3>
          <span>
            Digite seu peso e altura para avaliação da saúde ponderal.
          </span>
        </Text>
        
          <Form className="col-md-7">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Altura</Form.Label>
              <Form.Control type="number" placeholder="cm" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Peso</Form.Label>
              <Form.Control type="number" placeholder="kg" />
            </Form.Group>
            <div>
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Feminino"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />

                    <Form.Check
                      inline
                      label="Masculino"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Form>
            </div>

            <Button label="ENVIAR" />
          </Form>
        
      </ImcSpace>
    </Container>
  );
}
