import "./Habilidades.css";
import { aboutIcons } from "./Abouticons";

export const Habilidades = () => {
  const IconsComponent = ({ name, src }) => {
    return (
      <picture className="pict">
        <img className="skills__img" src={src} alt={`logo de ${name}`} />
        <p className="skills__text">{name}</p>
      </picture>
    );
  };
  return (
    <section className="skills">
      <div className="linear"></div>
      <h2 className="title">Habilidades</h2>
      <article className="cont__skills">
        <div>
          <h3 className="skill__title">Informatica</h3>
          <div className="informatica">
            {aboutIcons
              .filter(({ habilidades }) => habilidades === "informatica")
              .map(({ name, src }, index) => (
                <IconsComponent name={name} src={src} key={index} />
              ))}
          </div>
        </div>
        <div>
          <h3 className="skill__title">Complementarias</h3>
          <div className="complementarias">
            {aboutIcons
              .filter(({ habilidades }) => habilidades === "complementarias")
              .map(({ name, src }, index) => (
                <IconsComponent name={name} src={src} key={index} />
              ))}
          </div>
        </div>
      </article>
    </section>
  );
};
