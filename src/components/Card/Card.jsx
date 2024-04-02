export const Card = ({ image, title, description, technology }) => {
  return (
    <article className="projects__cont">
      <img className="project__img" src={image} alt="imagen del proyecto" />
      <div className="container__textandbutton">
        <p className="project__title">{title}</p>
        <p className="project__text">{description}</p>
        <ul className="cont">
          {technology.map((technology) => {
            return (
              <li>
                <img className="icon" src={technology.src} alt="" />
                <p className="nametech">{technology.name}</p>
              </li>
            );
          })}
        </ul>
        <button className="btn ">Ver más</button>
      </div>
    </article>
  );
};
