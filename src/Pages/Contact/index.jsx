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
            targetOrigin: "*",
          },
          iframe
        );
      }
    };
    script.onerror = () => console.error("Error loading iframeResizer");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
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
