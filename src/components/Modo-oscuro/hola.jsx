import "./hola.css";
import { useState } from "react";

export const Hola = () => {
  const [pepi2, setIsPepi] = useState(false);

  const pepi = () => {
    const root = document.documentElement;
    setIsPepi(!pepi2);
    pepi2
      ? root.style.setProperty("--matiputo", "pink")
      : root.style.setProperty("--matiputo", "blue");
  };

  return (
    <>
      <h1 className="asd">Matiputo</h1>
      <button onClick={pepi}>click</button>
    </>
  );
};
