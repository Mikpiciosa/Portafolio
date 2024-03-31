import { useState } from "react";
import "./Header2.css";
import logo from "/nombre.svg";

export const Header = () => {
  const [isClickedMenu, setIsClickedMenu] = useState(false);

  console.log(isClickedMenu);

  return (
    <header className="header">
      <nav className="nav">
        <img className="logo" src={logo} alt="logo" />
        <div
          className={`menu ${isClickedMenu && "menu--open"} `}
          onClick={() => {
            return setIsClickedMenu(!isClickedMenu);
          }}
        >
          <div className="menu__item"></div>
          <div className="menu__item"></div>
          <div className="menu__item"></div>
        </div>
        <ul className={`menu__list ${isClickedMenu && "menu__list--open"} `}>
          <li className="list__item">
            <a className="list__link" href="">
              About
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="">
              Services
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="">
              Projects
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
