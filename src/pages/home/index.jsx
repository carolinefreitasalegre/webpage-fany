import React from "react";
import { HomeSpace } from "./style";
import Button from "../../components/Button";

export default function Home() {
  const handleClick = () =>{
    alert('clicou')
  }
  return (
    <HomeSpace>
      <h1>
        CORPO E MENTE <span> SAUDÁVEIS</span>
      </h1>
      <Button onClick={handleClick} label="FALE COMIGO" />
    </HomeSpace>
  );
}
