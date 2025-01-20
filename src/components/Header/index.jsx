import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.webp";
import mobile from "../../assets/Logomobile.webp";
import "./header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="headerContainer">
      <img className="headerContainer__img" src={logo} alt="Logo du site." />
      <img className="headerContainer__imgM" src={mobile} alt="Logo du site." />

      <button className="headerContainer__toggle" onClick={toggleMenu}>
        ☰
      </button>

      <div
        className={`headerContainer__Div ${
          isMenuOpen ? "headerContainer__Div--open" : ""
        }`}
      >
        <NavLink to="/" className="headerContainer__lien">
          HOME
        </NavLink>

        <NavLink to="/portfolio" className="headerContainer__lien">
          PORTFOLIO
        </NavLink>

        <NavLink to="/about" className="headerContainer__lien">
          A PROPOS
        </NavLink>

        <NavLink to="/cv" className="headerContainer__lien">
          CV
        </NavLink>
      </div>
    </div>
  );
}
export default Header;
