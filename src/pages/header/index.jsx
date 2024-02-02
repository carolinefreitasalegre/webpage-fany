import React from "react";
import { HeaderSpace } from "./style";
import Logo from "../../assets/logo.jpeg";
import Container from "@mui/material/Container";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Header() {
  return (
    <Container maxWidth="xl">
      <HeaderSpace>
        <img src={Logo} alt="logo" />
        <span>
          <a
            class="whatsapp-link"
            color="#b3717b"
            href="https://web.whatsapp.com/send?phone=5567991299504"
            target="_blank"
          >
            <WhatsAppIcon color="secondary" />
          </a>
        </span>
      </HeaderSpace>
    </Container>
  );
}
