// Page Erreur

import React from "react";
import { NavLink } from "react-router-dom";
import "./error.scss";

function Error() {
  return (
    <div className="error">
      <div className="error__p">
        <h1 className="error__title"> Oups ! Perdu dans le code ?</h1>
        <p className="error__content">
          Ne vous inquiétez pas, tout est sous contrôle !👩‍💻
        </p>
        <NavLink
          className="error__lien"
          to="/"
          aria-label="Retour à la page d'accueil "
        >
          Retournons à la page d'accueil.
        </NavLink>
      </div>
      <h2 className="error__4">404</h2>
    </div>
  );
}
export default Error;
