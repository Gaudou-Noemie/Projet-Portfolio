// Fonction qui retourne le MyCv

import "./MyCv.scss";
import Resume from "../Resume";

function MyCv() {
  return (
    <div className="MyCvContainer">
      <h1 className="MyCvContainer__title">CURRICULUM VITAE</h1>
      <div className="MyCvContainer__element">
        <Resume />
      </div>
    </div>
  );
}
export default MyCv;
