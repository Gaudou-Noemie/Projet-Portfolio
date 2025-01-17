import React from "react";
import { NavLink } from "react-router-dom";
import "./error.scss";

function Error() {
  return (
    <div className="error">
      <div className="error__p">
        <p className="error__4">404</p>
        <p> Oups! La page ne charge pas.</p>
        <NavLink className="error__lien" to="/">
          Retour HOME.
        </NavLink>
      </div>
    </div>
  );
}
export default Error;
