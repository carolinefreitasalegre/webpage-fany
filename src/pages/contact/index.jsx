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
        <Form className="col-md-3 " >
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
          <Button label="ENVIAR" />
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
                style={{ fontSize: 30, color: "black"}}
              />
              Whatsapp
            </a>
          </div>
        </WebPages>
      </SpaceContact>
    </Container>
  );
}
