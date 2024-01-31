import React from "react";
import Form from "react-bootstrap/Form";
import Button from "../../components/Button";
import { Container, SpaceContact, WebPages } from "./style";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Contact() {
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <Container>
      <SpaceContact>
        <Form className="col-md-3 ">
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="nome" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Duvidas ou Solicitações</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button label="ENVIAR"/>
        </Form>
        <WebPages>
          <div>
            <InstagramIcon style={{ fontSize: 30, color: "#b3717b" }} />
            Instagram
          </div>
          <div>
            <WhatsAppIcon style={{ fontSize: 30, color: "#b3717b" }} />
            Whatsapp
          </div>
        </WebPages>
      </SpaceContact>
    </Container>
  );
}
