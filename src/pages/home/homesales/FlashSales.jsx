import React, { useRef } from "react";
import { Navigation } from "swiper";

import SliderCategory from "../../../components/slider/SliderCategory";
import Slider, { breakpoints } from "../../../components/slider/Slider";
import SliderTitle from "../../../components/slider/SliderTitle";
import SliderImage from "../../../components/slider/SliderImage";
import SliderContent from "../../../components/slider/SliderContent";
import ProductData from "../../../assests/ProductData";

export default function FlashSales() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  return (
    <>
      <div className="container my-5 pt-4">
        <div className="todayflashsales">
          <SliderCategory
            iconColor="white"
            icon="bi-fire"
            titleColor="#8c71db"
            title="Today's"
          />

          <SliderTitle
            title="Flash Sales"
            timer={{
              fontSize: "15px",
              deadLine: "2023-5-4",
              area: "60px",
              background: "#f7f7f7",
            }}
            navigationNextRef={navigationNextRef}
            navigationPrevRef={navigationPrevRef}
          />
        </div>
        <Slider
          property={{
            modules: [Navigation],
            spaceBetween: 20,
            loop: true,
            speed: 600,
            pagination: { clickable: true },
            navigation: {
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            },
            onBeforeInit: (swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            },
            breakpoints: breakpoints,
          }}
          value={{
            SlideCard,
            slideData,
          }}
        />
      </div>
    </>
  );
}

function SlideCard(props) {
  return (
    <>
      <div style={{ cursor: "pointer" }} className="flashsale">
        <SliderImage {...props} />
        <SliderContent {...props} />
      </div>
    </>
  );
}

const slideData = ProductData.slice(0, 8);
