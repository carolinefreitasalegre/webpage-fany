import React from "react";
import { ButtonC } from "./style";

export default function Button({ onClick, label }) {
  
  return (
    <ButtonC
      onClick={onClick}
      data-aos="fade-right"
      data-aos-delay="160"
      data-aos-duration="900"
    >
      {label}
    </ButtonC>
  );
}
