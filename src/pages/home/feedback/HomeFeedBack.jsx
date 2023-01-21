import React, { useRef } from "react";
import SliderCategory from "../../../components/slider/SliderCategory";
import SliderTitle from "../../../components/slider/SliderTitle";
import Slider from "../../../components/slider/Slider";
import { Navigation } from "swiper";

import "./scss/HomeFeedBack.style.scss";

export default function HomeFeedBack() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <>
      <section style={{ padding: "75px 0", background: "#F9F3F0" }}>
        <div className="container">
          <div className="home-feedback">
            <SliderCategory
              iconColor="white"
              icon="bi-quote"
              title="Testimonials"
              titleColor="#ff4b7e"
            />

            <SliderTitle
              title="Users Feedback"
              styleClass="mb-4"
              navigationNextRef={navigationNextRef}
              navigationPrevRef={navigationPrevRef}
            />

            <Slider
              property={{
                modules: [Navigation],
                spaceBetween: 30,
                slidesPerView: 3,
                loop: true,
                centeredSlides: true,
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

function SlideCard(props) {
  return (
    <>
      <div className="testimonialslides">
        <div className="testimonial-message-box rounded p-5">
          <p>{props.message}</p>
        </div>
        <div className="testimonial-message-by mt-5">
          <div className="d-flex align-items-center gap-3">
            <div>
              <img src={props.personImg} alt="img" />
            </div>
            <div>
              <p>{props.profession}</p>
              <h6>{props.name}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const slideData = [
  {
    name: "James C.Aderson",
    profession: "Head Of Idea",
    personImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-1.png",
    message:
      "“ It’s amazing how much easier it has been tomeet new people and create instantly non connections. I have the exact same personalthe only thing that has changed is my mindset and a few behaviors. “",
  },
  {
    name: "James C.Aderson",
    profession: "Head Of Idea",
    personImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-2.png",
    message:
      "“ It’s amazing how much easier it has been tomeet new people and create instantly non connections. I have the exact same personalthe only thing that has changed is my mindset and a few behaviors. “",
  },
  {
    name: "James C.Aderson",
    profession: "Head Of Idea",
    personImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-3.png",
    message:
      "“ It’s amazing how much easier it has been tomeet new people and create instantly non connections. I have the exact same personalthe only thing that has changed is my mindset and a few behaviors. “",
  },
];

const breakpoints = {
  0: {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
  576: {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
  992: {
    slidesPerView: 3,
    slidesPerGroup: 1,
  },
};
