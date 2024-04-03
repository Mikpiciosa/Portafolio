import "./About.css";

export const About = () => {
  return (
    <section className="about">
      <img className="about__img" src="./yo.png" alt="" />
      <div className="cont__text">
        <h2 className="title">Sobre Mi</h2>
        <p className="about__text">
          Hola!, mi nombre es Micaela, soy desarrolladora y diseñadora web, me
          encanta crear sitios llamativos y funcionales para los clientes.
          <br />
          <br />
          Desde chica, me llamo la atención el diseño y cuando descubrí la
          manera de combinarlo con código, encontré realmente mi profesión.
        </p>
      </div>
    </section>
  );
};
