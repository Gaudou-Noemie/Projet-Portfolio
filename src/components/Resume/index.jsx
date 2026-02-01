// Fonction qui retourne le Cv

import "./resume.scss";
import Contact from "../Contact";
import me1 from "../../assets/me3.jpg";
import Progress from "../Progress";

function Resume() {
  return (
    <div className="resumeContainer">
      <div className="resumeContainer__header">
        <h2 className="resumeContainer__title"> Gaudou Noémie </h2>
        <Contact />
      </div>
      <div className="resumeContainer__content">
        <div className="resumeContainer__div">
          <div className="resumeContainer__info">
            <section className="resumeContainer__experience">
              <h2 className="resumeContainer__title2">
                Expérience Professionnelle
              </h2>
              <ul className="resumeContainer__list">
                <li>2025 – : Développeur Full-stack-Concepteur/Ingégrateur React/UX</li>
                <li>2020 – 2021 : Responsable administratif (CDI)</li>
                <li>2010 – 2020 : Conseillère vente (CDI)</li>
              </ul>
            </section>

            <section className="resumeContainer__formation">
              <h2 className="resumeContainer__title2">Formation</h2>
              <ul className="resumeContainer__list">
                <li>2024 – 2025 : Développeur Web, OpenClassrooms</li>
                <li>
                  2010 – 2014 : CAP Fleuriste ,BP Fleuriste Chambre des métiers de
                  l’Artisanat
                </li>
              </ul>
            </section>
          </div>
          <div className="resumeContainer__me">
            <div className="resumeContainer__img1">
              <img
                src={me1}
                className="resumeContainer__me1"
                alt="Portrait de la créatrice du site."
              />
            </div>
          </div>
        </div>
        <Progress />
      </div>
    </div>
  );
}

export default Resume;
