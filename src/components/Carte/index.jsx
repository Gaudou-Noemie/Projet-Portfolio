// Fonction qui retourne l'élement A propos.

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Photo from "../../assets/Photo.webp";
import Logo from "../Logo";
import "./carte.scss";

function Carte() {
  const typedRef = useRef(null);
  let typedInstance = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["De la Beauté des Fleurs à l'Élégance du Code"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 500,
      loop: false,
      onComplete: (self) => {
        setTimeout(() => {
          self.reset(true);
        }, 4000);
      },
    };

    typedInstance.current = new Typed(typedRef.current, options);
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="carteContainer">
      <h1 className="carteContainer__H">À PROPOS</h1>
      <div className="carteContainer__element">
        <h2 className="carteContainer__title">
          <span ref={typedRef}></span>
        </h2>
        <div className="carteContainer__content">
          <div className="carteContainer__div">
            <img
              className="carteContainer__img"
              src={Photo}
              alt="Portrait de la créatrice du site"
              loading="lazy"
            />
          </div>
          <div className="carteContainer__p">
            <p>
              <FontAwesomeIcon icon={faQuoteLeft} className="quoteIconLeft" />
              Bonjour, je m’appelle Noémie, ancienne fleuriste reconvertie en
              développeuse web. Passer des bouquets aux lignes de code ? Ce
              choix peut sembler atypique, mais il reflète une évolution
              naturelle de ma passion pour la créativité et le sens du détail.
            </p>
            <p>
              Après avoir découvert le monde du développement web, j’ai
              entrepris une formation de Développeur Web bac+2 chez
              OpenClassrooms. Cette expérience m’a permis d’acquérir les
              compétences nécessaires pour concevoir des sites et des
              applications modernes, alliant esthétique et fonctionnalité.
            </p>
            <p>
              Aujourd’hui, je mets à profit ma rigueur, mon adaptabilité et mon
              imagination pour répondre aux besoins de mes clients. Organisée,
              polyvalente et toujours enthousiaste, je suis prête à accompagner
              vos projets avec professionnalisme et détermination.
              <FontAwesomeIcon icon={faQuoteRight} className="quoteIconRight" />
            </p>
          </div>
        </div>
        <section className="carteContainer__skills">
          <Logo />
        </section>
      </div>
    </div>
  );
}

export default Carte;
