// Fonction qui retourne le Header

import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.webp";
import mobile from "../../assets/Logomobile.webp";
import "./header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="headerContainer">
      <img
        className="headerContainer__img"
        src={logo}
        alt="Logo du site."
        loading="lazy"
      />
      <img
        className="headerContainer__imgM"
        src={mobile}
        alt="Logo du site."
        loading="lazy"
      />

      <button
        className="headerContainer__toggle"
        onClick={handleToggleMenu}
        aria-label="Menu"
      >
        ☰
      </button>

      <div
        className={`headerContainer__Div ${
          menuOpen ? "headerContainer__Div--open" : ""
        }`}
      >
        <NavLink
          to="/"
          className="headerContainer__lien"
          onClick={handleCloseMenu}
        >
          HOME
        </NavLink>

        <NavLink
          to="/portfolio"
          className="headerContainer__lien"
          onClick={handleCloseMenu}
        >
          PORTFOLIO
        </NavLink>

        <NavLink
          to="/about"
          className="headerContainer__lien"
          onClick={handleCloseMenu}
        >
          À PROPOS
        </NavLink>

        <NavLink
          to="/contact"
          className="headerContainer__lien"
          onClick={handleCloseMenu}
        >
          CONTACT
        </NavLink>

        <NavLink
          to="/cv"
          className="headerContainer__lien"
          onClick={handleCloseMenu}
        >
          CV
        </NavLink>
      </div>
    </div>
  );
}
export default Header;
