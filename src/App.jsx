import "./App.css";
/* import { Hola } from "./components/hol/hola"; */
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Portada } from "./components/Portada/Portada";
import { Servicios } from "./components/Servicios/Servicios";
import { Habilidades } from "./components/Habilidades/Habilidades";
import { Projects } from "./components/Projects/Projects";
import { Contacto } from "./components/Contacto/Contacto";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section className="bg">
          <Portada></Portada>
          <About></About>
          <Servicios></Servicios>
          {/* <Hola></Hola> */}
        </section>
        <section className="">
          <Habilidades></Habilidades>
          <Projects></Projects>
        </section>
        <Contacto></Contacto>
      </main>
    </>
  );
}

export default App;
