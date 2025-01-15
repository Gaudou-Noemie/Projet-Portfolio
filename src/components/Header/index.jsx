import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.jpg";
import "./header.scss";

function Header() {
  return (
    <div className="headerContainer">
      <img className="headerContainer__img" src={logo} alt="Logo du site" />
      <div className="headerContainer__Div">
        <NavLink to="/" className="headerContainer__lien">
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
