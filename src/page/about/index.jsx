import React from "react";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "../../../node_modules/swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css"

import new1 from "../../asset/Menu Image/new1.jpg";
import new2 from "../../asset/Menu Image/new2.jpg";
import new3 from "../../asset/Menu Image/new3.jpg";
import new4 from "../../asset/Menu Image/new4.jpg";
import new5 from "../../asset/Menu Image/new5.jpg";
import new6 from "../../asset/Menu Image/new6.png";
import new7 from "../../asset/Menu Image/new7.jpg";
import new8 from "../../asset/Menu Image/new8.jpg";

function index() {
  return (
    <div className="container" >
      {/* <h1 className="heading">Flowers Gallery</h1> */}
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
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img className="About-img" src={new1} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="About-img" src={new2} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="About-img" src={new3} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="About-img" src={new4} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="About-img" src={new5} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="About-img" src={new6} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="About-img" src={new7} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="About-img" src={new8} alt="slide_image"></img>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>

          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default index;
