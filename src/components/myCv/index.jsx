import "./myCv.scss";
import Img from "../../assets/CV-2025.webp";
import Contact from "../Contact";

function MyCv() {
  return (
    <div className="MyCvContainer">
      <h1 className="MyCvContainer__title">Curriculum vitae</h1>
      <div className="MyCvContainer__element">
        <div className="MyCvContainer__content">
          <img
            className="MyCvContainer__img"
            src={Img}
            alt="Curriculum vitae de la créatrice du site."
          />
        </div>

        <Contact />
      </div>
    </div>
  );
}
export default MyCv;
