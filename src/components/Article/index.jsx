import "./article.scss";
import projets from "../../Data/projets.json";
import Modal from "../Modale";
import { useState } from "react";

function Article() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjet, setSelectedProjet] = useState(null);

  const openModal = (projet) => {
    setSelectedProjet(projet);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjet(null);
  };

  return (
    <div className="div">
      {projets && projets.length > 0 ? (
        projets.map((projet) => (
          <div className="articleContainer" key={projet.id}>
            <div className="articleContainer__element">
              <div
                className="articleContainer__divImg"
                onClick={() => openModal(projet)}
              >
                <img
                  className="articleContainer__img"
                  src={projet.img}
                  alt={projet.title}
                  loading="lazy"
                />
              </div>
              <div className="articleContainer__links">
                <a
                  href={projet.code}
                  className="articleContainer__code"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lien vers GitHub"
                >
                  <i className="fab fa-github"></i> Code du site
                </a>
                <a
                  href={projet.deployment}
                  className="articleContainer__deployment"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lien vers le déploiement du projet"
                >
                  <i className="fas fa-globe"></i> Site en ligne
                </a>
              </div>
              {projet.languages && projet.languages.length > 0 && (
                <div className="articleContainer__languages">
                  {projet.languages.map((lang, index) => (
                    <span key={index} className="articleContainer__language">
                      <i className={lang.icon}></i> {lang.name}
                    </span>
                  ))}
                </div>
              )}
              {projet.outils && projet.outils.length > 0 && (
                <div className="articleContainer__outils">
                  {projet.outils.map((outil, index) => (
                    <span key={index} className="articleContainer__outil">
                      <i className={outil.icon}></i> {outil.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <h2 className="articleContainer__title">{projet.title}</h2>
          </div>
        ))
      ) : (
        <p> Aucun projet trouvé</p>
      )}
      {isModalOpen && <Modal projet={selectedProjet} closeModal={closeModal} />}
    </div>
  );
}
export default Article;
