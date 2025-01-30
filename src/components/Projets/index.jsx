// Fonction qui retourne les Articles.

import "./projets.scss";
import Article from "../Article";

function Projets() {
  return (
    <div className="projetsContainer">
      <h1 className="projetsContainer__title">PORTFOLIO</h1>
      <Article />
    </div>
  );
}

export default Projets;
