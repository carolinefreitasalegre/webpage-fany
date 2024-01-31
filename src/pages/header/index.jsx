import React from "react";
import { HeaderSpace } from "./style";
import Logo from "../../assets/logo.png";
import Container from "@mui/material/Container";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Header() {
  return (
    <Container maxWidth="xl">
      <HeaderSpace>
        <img src={Logo} alt="logo" />
        <span>
          <WhatsAppIcon color="secondary" />
          67 9 9129-9504
        </span>
      </HeaderSpace>
    </Container>
  );
}
