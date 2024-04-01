<section className="projects__cont">
  <div className="project__conteiner--img">
    <img className="project__img" src={mypet} alt="imagen del proyecto" />
    <img className="project__logo" src={figma} alt="logito de figma" />
  </div>
  <div className="container__textandbutton">
    <p className="project__title">My Pet Social</p>
    <p className="project__text">
      Con nuestro servicio de diseño UX/UI ofrecemos acompañamiento desde el UX
      con una amplia investigacion.
    </p>
    <button className="btn">Ver Más</button>
  </div>
</section>;

export const Card = ({ image, icons, title, description, btn }) => {
  return (
    <section>
      <div>
        <img src={} alt="" />
      </div>
      <div></div>
    </section>
  );
};
