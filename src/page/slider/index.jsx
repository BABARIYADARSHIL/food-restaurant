import React, { useState } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./index.css";

import new1 from "../../asset/Menu Image/new1.jpg";
import new2 from "../../asset/Menu Image/new2.jpg";
import new3 from "../../asset/Menu Image/new3.jpg";
import new4 from "../../asset/Menu Image/new4.jpg";
import new5 from "../../asset/Menu Image/new5.jpg";
import new6 from "../../asset/Menu Image/new6.png";
import new7 from "../../asset/Menu Image/new7.jpg";
import new8 from "../../asset/Menu Image/new8.jpg";

const Slider = () => {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="swiper_container"
      >
        {[
          new1,
          new2,
          new3,
          new4,
          new5,
          new6,
          new7,
          new8,
          new1,
          new2,
          new3,
          new4,
          new5,
          new6,
          new7,
          new8,
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="About-img"
              src={image}
              alt={`slide_image_${index}`}
              onClick={() => handleImageClick(image)}
            />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={modalImage} alt="modal_image" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
