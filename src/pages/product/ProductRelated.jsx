import React, { useRef } from "react";
import { Navigation } from "swiper";
import SliderCategory from "../../components/slider/SliderCategory";
import SliderTitle from "../../components/slider/SliderTitle";
import Slider, { breakpoints } from "../../components/slider/Slider";
import SliderImage from "../../components/slider/SliderImage";
import { SliderContent1, SliderContent2 } from "../../components/slider/SliderContent";
import ProductData from "../../assests/ProductData";
import { useMemo } from "react";

export default function ProductRelated() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  const slideData = useMemo(() => shuffle([...ProductData]), []);
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array.slice(0, 8);
  }
  
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
            icon="bi-link-45deg"
            titleColor="#8C71DB"
            title="Best Choice"
          />

          <SliderTitle
            title="Related Product"
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
        {props.view==="color" ? (
                <SliderContent2 {...props} />
              ) : (
                <SliderContent1 {...props} />
              )}
      </div>
    </>
  );
}
