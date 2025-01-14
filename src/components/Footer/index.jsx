import Carousel from "../Carousel";
import "./footer.scss";

function Footer() {
  return (
    <div className="footerContainer">
      <p className="footerContainer__p">
        Mes partenaires et outils clés pour un développement réussi
      </p>
      <Carousel />
      <p className="footerContainer__reserver">
        © 2025 Gaudou Noémie. Tous droits réservés.
      </p>
    </div>
  );
}

export default Footer;
