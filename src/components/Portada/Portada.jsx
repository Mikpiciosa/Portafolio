import "./Portada.css";
import frontLogo from "/loguito.svg";

export const Portada = () => {
  return (
    <section className="frontpage">
      <div className="bubble-container">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3">
          <img className="frontLogo" src={frontLogo} alt="" />
        </div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>
    </section>
  );
};
