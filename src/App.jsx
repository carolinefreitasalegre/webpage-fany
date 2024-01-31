import React from "react";
import Header from "./pages/header";
import Home from "./pages/home";
import { Presentation } from "./pages/presentation";
import Class from "./pages/class";
import PlanClass from "./pages/plan";
import Imc from "./pages/imc";
import Contact from "./pages/contact";

export default function app() {
  return (
    <>
      <Header />
      <Home />
      <Presentation />
      <Class />
      <PlanClass />
      <Imc />
      <Contact/>
    </>
  );
}
