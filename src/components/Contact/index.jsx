// Fonction qui retourne les liens de contacts

import "./contact.scss";

function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactContainer__lien">
        <a
          className="contactContainer__email"
          href="mailto:gaudou.noemie@gmail.com"
          aria-label="Envoyer un emai"
        >
          <i className="fas fa-envelope"></i> Mail
        </a>

        <a
          className="contactContainer__linkedin"
          href="https://www.linkedin.com/in/noémie-gaudou"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lien vers Linkedin"
        >
          <i className="fab fa-linkedin"></i> Linkedin
        </a>
        <a
          className="contactContainer__github"
          href="https://github.com/Gaudou-Noemie"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lien vers GitHub"
        >
          <i className="fab fa-github"></i> Github
        </a>
        <a
          href="./CV 2025.pdf"
          download={true}
          className="contactContainer__pdf"
          type="application/pdf"
          aria-label="Télécharger le CV de Noémie Gaudou au format PDF (taille : 1 Mo)"
        >
          <i className="fas fa-file-pdf"></i> Cv
          <span className="pdf">(PDF)</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
