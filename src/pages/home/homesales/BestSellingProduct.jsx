import React, { useRef } from "react";
import SliderCategory from "../../../components/slider/SliderCategory";
import SliderTitle from "../../../components/slider/SliderTitle";
import SliderImage from "../../../components/slider/SliderImage";
import Slider from "../../../components/slider/Slider";
import { Navigation } from "swiper";
import { breakpoints } from "../../../components/slider/Slider";
import { SliderContent1 } from "../../../components/slider/SliderContent";
import ProductData from "../../../assests/ProductData";

export default function BestSellingProduct() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const propertySlider = {
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
  };
  return (
    <>
      <div className="container my-5 pt-4">
        <div className="bestsellingproduct">
          <SliderCategory
            iconColor="white"
            icon="bi-basket"
            titleColor="#8C71DB"
            title="This Month"
          />

          <SliderTitle
            title="Best Selling Product"
            navigationNextRef={navigationNextRef}
            navigationPrevRef={navigationPrevRef}
          />

          <Slider
            property={propertySlider}
            value={{
              SlideCard,
              slideData,
            }}
          />
        </div>
      </div>
    </>
  );
}

function SlideCard(props) {
  return (
    <>
      <div style={{ cursor: "pointer" }} className="bestsellingproductslide">
        <SliderImage {...props} />
        <SliderContent1 {...props} />
      </div>
    </>
  );
}

const slideData = ProductData.slice(8,16)
