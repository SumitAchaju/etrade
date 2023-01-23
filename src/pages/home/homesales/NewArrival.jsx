import React, { useRef } from "react";
import SliderCategory from "../../../components/slider/SliderCategory";
import SliderTitle from "../../../components/slider/SliderTitle";
import Slider ,{breakpoints} from "../../../components/slider/Slider";
import { Navigation } from "swiper";
import SliderImage from "../../../components/slider/SliderImage";
import { SliderContent3 } from "../../../components/slider/SliderContent";
import ProductData from "../../../assests/ProductData";

export default function NewArrival() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <>
      <section className="mt-5 pt-4">
        <div className="container">
          <div className="newarrivals">
            <SliderCategory
              icon="bi-basket"
              iconColor="white"
              title="This Week's"
              titleColor="#8C71DB"
            />

            <SliderTitle
              title="New Arrivals"
              styleClass="mb-4"
              navigationPrevRef={navigationPrevRef}
              navigationNextRef={navigationNextRef}
            />

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
        </div>
      </section>
    </>
  );
}


function SlideCard(props){
    return(
        <>
        <div className="newarrivals-slide">
            <div>
                <SliderImage {...props} imgStyle="rounded-circle"/>
            </div>
            <div>
              <SliderContent3 {...props} />
            </div>
        </div>
        </>
    )
}

const slideData = ProductData.slice(24,32)
  