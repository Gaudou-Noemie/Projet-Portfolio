import React, { useState, useEffect } from "react";
import { pictures } from "../../Data/pictures";
import "./gallery.scss";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery">
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture.src}
          alt={picture.alt}
          className={`gallery__img ${
            index === currentIndex ? "active" : "inactive"
          }`}
        />
      ))}
      <div className="gallery__texte">
        <h1 className="gallery__title">Bienvenue, Je suis Noémie !</h1>
        <p className="gallery__content">Développeuse Web !</p>
        <p className="gallery__info">Frontend / Backend</p>
      </div>
    </div>
  );
}

export default Gallery;
