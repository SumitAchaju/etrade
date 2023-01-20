import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// You have to give property of Swiper of your own desire in property attribute and component to be render in slides with its array of slideData in value attribute //

export default function Slider({ property, value }) {
  const { SlideCard, slideData } = value;
  return (
    <>
      <Swiper {...property}>
        {slideData.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export const breakpoints = {
        0:{
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1400: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
}