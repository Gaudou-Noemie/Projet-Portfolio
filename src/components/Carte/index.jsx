import Photo from "../../assets/Photo.webp";
import "./carte.scss";

function Carte() {
  return (
    <div className="carteContainer">
      <div className="carteContainer__div">
        <img
          className="carteContainer__img"
          src={Photo}
          alt="Portrait de la créatrice du site"
        />
      </div>{" "}
    </div>
  );
}

export default Carte;
