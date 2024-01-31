import { Container } from "@mui/material";
import React from "react";
import imgCard from "../../assets/cardimage.png";
import { ClassSpace, Text } from "./style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Class() {
  return (
    <ClassSpace>
      <Text>
        <h1>TREINOS E AULAS</h1>
        <span>Aulas pensadas para cada corpo</span>
      </Text>
      <Container style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={imgCard}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  borderBottom: "1px solid #C38D8B",
                }}
              >
                TREINAMENTO DESPORTIVO
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Visa aprimorar habilidades atléticas por meio de métodos
                científicos e práticos. Envolve condicionamento físico, técnica,
                psicologia e nutrição, adaptando-se às necessidades específicas
                de cada modalidade.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={imgCard}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  borderBottom: "1px solid #C38D8B",
                }}
              >
                MUSCULAÇÃO
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Destinado a fortalecer e desenvolver os músculosvisando a
                melhoraria da força, resistência muscular e saúde óssea, sendo
                acessível a diversos níveis de condicionamento físico.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={imgCard}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  borderBottom: "1px solid #C38D8B",
                }}
              >
                PERSONAL FIGHT
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Combina elementos de condicionamento físico, artes marciais e
                técnicas de defesa pessoal, proporcionando uma abordagem
                personalizada para cada indivíduo.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </ClassSpace>
  );
}
