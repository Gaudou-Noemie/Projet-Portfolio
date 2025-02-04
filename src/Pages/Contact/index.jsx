import React, { useEffect } from "react";
import "./contactme.scss";

function ContactMe() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js";
    script.onload = () => {
      const iframe = document.querySelector("iframe");
      if (iframe) {
        window.iFrameResize(
          {
            log: true,
            // Change * to the actual origin of the iframe's content
            targetOrigin: "https://tally.so", // Sécuriser en spécifiant une origine exacte
          },
          iframe
        );
      }
    };
    script.onerror = () => console.error("Error loading iframeResizer");
    document.body.appendChild(script);

    // Ajout d'un écouteur de message
    const handleMessage = (event) => {
      // Vérifie que le message vient bien de https://tally.so
      if (event.origin !== "https://tally.so") {
        console.warn(
          "Message provenant d'une origine non autorisée:",
          event.origin
        );
        return; // Ignorer le message si l'origine est incorrecte
      }

      // Traite le message ici
      console.log("Message reçu:", event.data);
    };

    window.addEventListener("message", handleMessage);

    // Nettoyage de l'écouteur et du script lors du démontage du composant
    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="contactContainer">
      <h2 className="contactContainer__title">ME CONTACTER</h2>
      <iframe
        className="contactContainer__iframe"
        src="https://tally.so/embed/mYJkL5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height="auto"
        title="Formulaire de contact"
        id="tallyIframe"
      ></iframe>
    </div>
  );
}

export default ContactMe;
