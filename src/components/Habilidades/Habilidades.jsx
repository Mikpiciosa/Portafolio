import "./Habilidades.css";
import { icons } from "./icons.js";

export const Habilidades = () => {
  return (
    <section className="skills">
      <div className="linear"></div>
      <h2 className="title">Habilidades</h2>
      <article className="cont__skills">
        <h3 className="skill__title">Informatica</h3>
        <div className="cont__icons">
          {icons.informatica.map(({ name, src }) => {
            return (
              <div className="icons__text" key={name}>
                <img className="skills__icons" src={src} alt="" />
                <p className="skills__text">{name}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="skill__title">Complementarias</h3>
          <div className="cont__icons">
            {icons.complementarias.map(({ name, src }) => {
              return (
                <div className="icon__cont" key={name}>
                  <img className="skills__icons" src={src} alt="" />
                  <p className="skills__text">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};
