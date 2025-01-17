import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./carousel.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { logos } from "../../Data/logos.js";

function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img src={logo.src} alt={logo.alt} className="carousel-logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
