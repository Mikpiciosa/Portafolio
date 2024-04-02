import "./Projects.css";
import { Card } from "../Card/Card";
import CardInfo from "../../data/Cardinfo.json";

export const Projects = () => {
  return (
    <section className="projects">
      <div className="linear"></div>
      <h2 className="title">Proyectos</h2>
      <p className="projects__calltoaction ">Conoce un poco de mi trabajo.</p>
      <p className="subtitles">Diseños</p>
      <div className="cont__cards">
        {CardInfo.diseños.map((project) => (
          <Card
            image={project.image}
            title={project.title}
            description={project.description}
            technology={project.technology}
          />
        ))}
      </div>
      <p className="subtitles">Websites</p>
      <div className="cont__cards">
        {CardInfo.websites.map((project) => (
          <Card
            image={project.image}
            title={project.title}
            description={project.description}
            technology={project.technology}
          />
        ))}
      </div>
    </section>
  );
};
