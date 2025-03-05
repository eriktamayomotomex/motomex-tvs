import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "@/assets/images/MOTOMEX LOGO.png";
import heroImage from "@/assets/images/BANNER-01.jpg";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        backgroundColor: "#fff",
        px: { xs: 4, md: 8 }, // Espaciado responsivo
        position: "relative", // Para posicionar la imagen de fondo
        overflow: "hidden", // Para evitar desbordamiento
      }}
    >
      {/* Texto y Logo */}
      <Box
        sx={{
          maxWidth: "600px",
          textAlign: "left",
          zIndex: 2, // Asegura que el texto esté por encima de la imagen
          position: "relative", // Para superponer el texto sobre la imagen
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.2,
            color: "#1A1A1A",
            fontSize: { xs: "2rem", md: "3rem" }, // Tamaño responsivo
          }}
        >
          Motomex, es{" "}
          <span style={{ color: "#D70000", fontWeight: "bold" }}>líder</span> en
          la industria del Motociclismo en México, desde hace 65 años.
        </Typography>

        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start", // Alinea el logo a la izquierda
            mt: 4, // Más espacio arriba
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Grupo Motomex"
            sx={{
              width: 300, // Aumentamos el tamaño del logo
              height: "auto",
            }}
          />
        </Box>
      </Box>

      {/* Imagen de fondo */}
      <Box
        component="img"
        src={heroImage}
        alt="Motomex Building"
        sx={{
          position: "absolute", // Posición absoluta para superponer
          right: 0,
          top: 0,
          height: "100%",
          width: "auto",
          objectFit: "cover", // Cubre todo el espacio disponible
          zIndex: 1, // Detrás del texto
        }}
      />
    </Box>
  );
};

export default Hero;