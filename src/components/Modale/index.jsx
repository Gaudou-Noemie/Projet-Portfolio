import React from "react";
import "./modale.scss";

const Modal = ({ projet, closeModal }) => {
  if (!projet) return null;
  return (
    <div className="modalContainer" onClick={closeModal}>
      <div
        className="modalContainer__content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modalContainer__title">{projet.title}</h2>
        <p className="modalContainer__descript"> {projet.description}</p>
        <h3 className="modalContainer__texte">Objectif :</h3>
        <p className="modalContainer__objective">{projet.objective}</p>

        <h4 className="modalContainer__texte">Problème rencontré :</h4>
        <p className="modalContainer__problem">{projet.problem}</p>
        <h5 className="modalContainer__texte">Solution Apporté :</h5>
        <p className="modalContainer__solution">{projet.solution}</p>
        <button onClick={closeModal} className="closeModalButton">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
