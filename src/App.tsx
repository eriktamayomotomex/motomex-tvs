import { useEffect } from "react";
import { initializeGA } from "./utils/analytics";
import HideAppBar from "./components/common/Navbar";
import Timeline from "@/components/sections/Timeline";

function App() {
  useEffect(() => {
    initializeGA();
  }, []);

  return (
    <>
      {/* Barra de navegación */}
      <HideAppBar />

      {/* Sección Hero */}
      <div id="hero" style={{ height: "100vh", background: "lightgray", paddingTop: "64px" }}>
        <h1>Primera sección (Hero)</h1>
      </div>

      {/* Línea del Tiempo */}
      <section id="timeline" style={{ background: "#f8f8f8", padding: "50px 20px" }}>
        <Timeline />
      </section>

      {/* Sección de Contacto */}
      <div id="contact-form" style={{ height: "100vh", background: "whitesmoke" }}>
        <h2>Última sección (Formulario)</h2>
      </div>
    </>
  );
}

export default App;
