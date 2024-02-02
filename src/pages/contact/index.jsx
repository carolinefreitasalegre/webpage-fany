import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "../../components/Button";
import { Container, SpaceContact, WebPages } from "./style";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (event) => {
    if (!name || !email || !message) {
      alert(
        "Por favor, preencha todos os campos antes de enviar o formulário."
      );
      return;
    }

    const templateparms = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_3yf0rbr",
        "template_7uadppq",
        templateparms,
        "zlfvRl-hbvwwLwOdX"
      )
      .then((res) => {
        alert("Enviado com sucesso! Obrigada 😁");
      });
  };
  return (
    <Container id="contact">
      <SpaceContact>
        <Form onSubmit={handleSubmit} className="col-md-3">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Dúvidas ou Solicitações</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <Button label="ENVIAR" type="submit" />
        </Form>
        <WebPages
          data-aos="fade-right"
          data-aos-delay="160"
          data-aos-duration="900"
        >
          <div>
            <a
              href="https://www.instagram.com/fanyolivveira?igsh=MWRlY3dmazRsc25yOA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon style={{ fontSize: 30, color: "black" }} />
              Instagram
            </a>
          </div>
          <div>
            <a
              class="whatsapp-link"
              color="#b3717b"
              href="https://web.whatsapp.com/send?phone=5567991299504"
              target="_blank"
            >
              <WhatsAppIcon
                color="secondary"
                style={{ fontSize: 30, color: "black" }}
              />
              Whatsapp
            </a>
          </div>
        </WebPages>
      </SpaceContact>
    </Container>
  );
}
