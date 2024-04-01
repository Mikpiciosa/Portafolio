import "./Habilidades.css";
import { icons } from "./icons.js";

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
          <div className="complementarias">
            {icons.informatica.map(({ name, src }) => {
              return (
                <div key={name}>
                  <img src={src} alt="" />
                  <p>{name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="skill__title">Complementarias</h3>
          <div className="complementarias">
            {icons.complementarias.map(({ name, src }) => {
              return (
                <div key={name}>
                  <img src={src} alt="" />
                  <p>{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};
