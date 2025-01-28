import React, { useState, useEffect } from "react";
import { pictures } from "../../Data/pictures";
import { mobilePictures } from "../../Data/pictures";
import "./gallery.scss";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === (isMobile ? mobilePictures : pictures).length - 1
          ? 0
          : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const imageData = isMobile ? mobilePictures : pictures;
  return (
    <div className="gallery">
      {imageData.map((picture, index) => (
        <img
          key={index}
          src={picture.src}
          alt={picture.alt}
          loading={index > 1 ? "lazy" : "eager"}
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
