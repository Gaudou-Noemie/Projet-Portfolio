// Fonction qui retourne le Footer

import Carousel from "../Carousel";
import "./footer.scss";

function Footer() {
  return (
    <div className="footerContainer">
      <h2 className="footerContainer__title">
        Coder n'est pas juste écrire du code, c'est résoudre des problèmes avec
        élégance.
      </h2>
      <Carousel />
      <p className="footerContainer__reserver">
        © 2025 Gaudou Noémie. Tous droits réservés.
      </p>
    </div>
  );
}

export default Footer;
