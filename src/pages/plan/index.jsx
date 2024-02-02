import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { PlanSpace, Text } from "./style";
import { Container } from "@mui/material";

export default function PlanClass() {
  return (
    <PlanSpace>
      <Text>
        <h1>PLANOS</h1>
        <span>Planos personalizados</span>
      </Text>
      <Container className="container" style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Card
          sx={{ maxWidth: 250, height: 340 }}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
          }}
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <CardContent>
            <Typography
              variant="p"
              component="div"
              style={{ fontWeight: "bold", marginTop: "1em" }}
            >
              MUSCULAÇÃO
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Personal Trainer
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              style={{
                backgroundColor: "#404040",
                color: "white",
                height: "5vh",
                display: "flex",
                alignItems: "center",
                margin: "2em 0",
                width: "16em",
              }}
            >
              <Typography
                sx={{ mb: 1.5 }}
                style={{
                  backgroundColor: "#B3717B",
                  color: "white",
                  height: "10vh",
                  minWidth: "5vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "2em 2em",
                }}
              >
                R$70/h
              </Typography>
              Aula
            </Typography>
            <Typography
              variant="body2"
              style={{
                display: "flex",
                gap: "5px",
                marginTop: "4em",
                padding: "10px 30px",
                textAlign: "left",
              }}
            >
              <TaskAltIcon style={{ color: "#B3717B" }} /> Adaptado às
              necessidades e objetivos específicos de cada cliente.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{ maxWidth: 250, height: 340 }}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
          }}
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <CardContent>
            <Typography
              variant="p"
              component="div"
              style={{ fontWeight: "bold", marginTop: "1em" }}
            >
              PERSONAL FIGHT
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Treinamento
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              style={{
                backgroundColor: "#404040",
                color: "white",
                height: "5vh",
                display: "flex",
                alignItems: "center",
                margin: "2em 0",
                width: "16em",
              }}
            >
              <Typography
                sx={{ mb: 1.5 }}
                style={{
                  backgroundColor: "#B3717B",
                  color: "white",
                  height: "10vh",
                  minWidth: "5vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "2em 2em",
                }}
              >
                R$90/h
              </Typography>
              Aula
            </Typography>
            <Typography
              variant="body2"
              style={{
                display: "flex",
                gap: "5px",
                marginTop: "4em",
                padding: "10px 30px",
                textAlign: "left",
              }}
            >
              <TaskAltIcon style={{ color: "#B3717B" }} /> Atendimento de forma
              particular e personalizado.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{ maxWidth: 250, height: 340 }}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
          }}
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <CardContent>
            <Typography
              variant="p"
              component="div"
              style={{ fontWeight: "bold", marginTop: "1em" }}
            >
              PERSONAL EM GRUPO
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Grupo de até 3 pessoas
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              style={{
                backgroundColor: "#404040",
                color: "white",
                height: "5vh",
                display: "flex",
                alignItems: "center",
                margin: "2em 0",
                width: "16em",
              }}
            >
              <Typography
                sx={{ mb: 1.5 }}
                style={{
                  backgroundColor: "#B3717B",
                  color: "white",
                  height: "10vh",
                  minWidth: "5vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "2em 2em",
                }}
              >
                R$2.800/h
              </Typography>
              Aula
            </Typography>
            <Typography
              variant="body2"
              style={{
                display: "flex",
                gap: "5px",
                marginTop: "4em",
                padding: "10px 30px",
                textAlign: "left",
              }}
            >
              <TaskAltIcon style={{ color: "#B3717B" }} /> Introdução de
              exercícios diversificados para atender às diferentes preferências
              e necessidades.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </PlanSpace>
  );
}
