import "./Servicios.css";

export const Servicios = () => {
  return (
    <section className="services">
      <div className="linear"></div>
      <h2 className="title">Servicios</h2>
      <p className="about__calltoaction ">
        Encontremos juntos la forma de plasmar tu idea.
      </p>
      <div>
        <div className="service__sections">
          <section className="service">
            <h2 className="serv__title">Diseño Ux/Ui</h2>
            <p className="serv__text">
              Con nuestro servicio de diseño UX/UI ofrecemos acompañamiento
              desde el UX con una amplia investigacion sobre el rubro en el cual
              esta apuntando y con el UI para generar una web/app atractiva e
              intuitiva a la vista de cualquier usuario.
            </p>
            <button className="btn">Ver más</button>
          </section>
          <section className="service">
            <h2 className="serv__title">Desarrollo Web</h2>
            <p className="serv__text">
              Cuento con todo lo necesario para crearte una web totalmente
              funcional, bien estructurada y sobretodo, agradable a la vista.
            </p>
            <button className="btn">Ver más</button>
          </section>
          <section className="service">
            <h2 className="serv__title">Asesoramiento</h2>
            <p className="serv__text">
              Con nuestro servicio de diseño UX/UI ofrecemos acompañamiento
              desde el UX con una amplia investigacion sobre el rubro en el cual
              esta apuntando y con el UI para generar una web/app atractiva e
              intuitiva a la vista de cualquier usuario.
            </p>
            <button className="btn">Ver más</button>
          </section>
        </div>
      </div>
    </section>
  );
};
