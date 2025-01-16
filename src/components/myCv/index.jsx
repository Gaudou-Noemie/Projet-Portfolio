import "./MyCv.scss";
import Img from "../../assets/CV-2025.webp";

function MyCv() {
  return (
    <div className="MyCvContainer">
      <h2 className="MyCvContainer__title">Curriculum vitae</h2>
      <div className="MyCvContainer__content">
        <img
          className="MyCvContainer__img"
          src={Img}
          alt="Curriculum vitae de la créatrice du site."
        />
      </div>
    </div>
  );
}
export default MyCv;
