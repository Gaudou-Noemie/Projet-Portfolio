import logos from "../../Data/logo.json";
import "./logo.scss";

function Logo() {
  return (
    <div className="logoContainer">
      {logos.map((logo, index) => (
        <div className="logoContainer__skill" key={index}>
          <i className={logo.icon}></i>
          <span className="logoContainer__name">{logo.name}</span>
        </div>
      ))}
    </div>
  );
}
export default Logo;
