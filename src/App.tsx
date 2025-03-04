import { useEffect } from "react";
import { initializeGA } from "./utils/analytics";

function App() {
  

    useEffect(() => {
    initializeGA();
  }, []);
  
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Motomex TVS</h1>
      <p>Bienvenido a la landing page oficial.</p>
    </div>
    </>
  )
}

export default App
