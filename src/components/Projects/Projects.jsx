import "./Projects.css";
import mypet from "/mypetsocial.png";
import moon from "/pagmoon.png";
import carilo from "/carilo.png";
import figma from "/icons/figma.svg";

export const Projects = () => {
  return (
    <section className="projects">
      <div className="linear"></div>
      <h2 className="title">Proyectos</h2>
      <p className="projects__calltoaction ">Conoce un poco de mi trabajo.</p>
      <section className="projects__cont">
        <div className="project__conteiner--img">
          <img className="project__img" src={mypet} alt="imagen del proyecto" />
          <img className="project__logo" src={figma} alt="logito de figma" />
        </div>
        <div className="container__textandbutton">
          <p className="project__title">My Pet Social</p>
          <p className="project__text">
            Con nuestro servicio de diseño UX/UI ofrecemos acompañamiento desde
            el UX con una amplia investigacion.
          </p>
          <button className="btn">Ver Más</button>
        </div>
      </section>
      <section className="projects__cont">
        <div className="project__conteiner--img">
          <img className="project__img" src={moon} alt="imagen del proyecto" />
          <img className="project__logo" src={figma} alt="logito de figma" />
        </div>
        <div className="container__textandbutton">
          <p className="project__title">Moon</p>
          <p className="project__text">
            Con nuestro servicio de diseño UX/UI ofrecemos acompañamiento desde
            el UX con una amplia investigacion.
          </p>
          <button className="btn">Ver Más</button>
        </div>
      </section>
      <section className="projects__cont">
        <div className="project__conteiner--img">
          <img
            className="project__img"
            src={carilo}
            alt="imagen del proyecto"
          />
          <img className="project__logo" src={figma} alt="logito de figma" />
        </div>
        <div className="container__textandbutton">
          <p className="project__title">Carilo Hills</p>
          <p className="project__text">
            Con nuestro servicio de diseño UX/UI ofrecemos acompañamiento desde
            el UX con una amplia investigacion.
          </p>
          <button className="btn">Ver Más</button>
        </div>
      </section>
    </section>
  );
};
