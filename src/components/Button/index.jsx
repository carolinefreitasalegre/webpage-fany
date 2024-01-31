import React from "react";
import { ButtonC } from "./style";

export default function Button({ onClick, label }) {
  return <ButtonC onClick={onClick}>{label}</ButtonC>;
}
