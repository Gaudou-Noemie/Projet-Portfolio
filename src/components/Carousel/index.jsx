// Fonction qui retourne le carousel de citation

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "./carousel.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import citations from "../../Data/citations.json";

function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        speed={4000}
        modules={[Navigation, Autoplay]}
        className="swiper-container"
      >
        {citations.map((citation) => (
          <SwiperSlide key={citation.id} className="swiper-slide">
            <div className="carousel-content">
              <blockquote className="carousel-texte">
                {citation.texte}
              </blockquote>
              <cite className="carrousel-author">– {citation.author}</cite>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
