import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function Navbar(props: Props) {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "8px 16px",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo de Motomex */}
            <Box
              component="img"
              src="/public/images/logo-motomex.png"
              alt="Motomex"
              sx={{ height: 40, cursor: "pointer" }}
              onClick={() => scrollToSection("hero")}
            />

            {/* Botón "Quiero ser distribuidor" */}
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: "none", fontWeight: "bold" }}
              onClick={() => scrollToSection("contact-form")}
            >
              Quiero ser distribuidor
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
