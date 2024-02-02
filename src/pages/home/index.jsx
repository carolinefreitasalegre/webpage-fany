import React from "react";
import { HomeSpace } from "./style";
import Button from "../../components/Button";

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <HomeSpace>
      <h1>
        CORPO E MENTE <span> SAUDÁVEIS</span>
      </h1>
      <Button onClick={scrollToContact} label="FALE COMIGO" />
    </HomeSpace>
  );
}
