import React, { useRef } from "react";
import SliderCategory from "../../../components/slider/SliderCategory";
import SliderTitle from "../../../components/slider/SliderTitle";
import Slider from "../../../components/slider/Slider";
import { Navigation } from "swiper";

import "./scss/BrowseByCategory.style.scss";

export default function BrowseByCategory() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <>
      <div className="container my-5 pt-5">
        <div className="browsebycategory">
          <SliderCategory
            iconColor="white"
            icon="bi-tags"
            titleColor="#ff4b7e"
            title="Categories"
          />

          <SliderTitle
            title="Browse by Category"
            styleClass="mb-4"
            navigationNextRef={navigationNextRef}
            navigationPrevRef={navigationPrevRef}
          />

          <Slider
            property={{
              modules: [Navigation],
              spaceBetween: 20,
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
    </>
  );
}

function SlideCard(props) {
  return (
    <>
      <div className="borwsebycategory">
        <div className="borwsebycategoryinner">
          <div className="borwsebycategoryinnercontent text-center">
            <img src={props.img} alt="img" />
            <h6>{props.title}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

const imgLink =
  "/images/browsebycategory";

const slideData = [
  {
    img: `${imgLink}/browse-01.png`,
    title: "Phones",
  },
  {
    img: `${imgLink}/browse-02.png`,
    title: "Computers",
  },
  {
    img: `${imgLink}/browse-03.png`,
    title: "Accessories",
  },
  {
    img: `${imgLink}/browse-04.png`,
    title: "Laptops",
  },
  {
    img: `${imgLink}/browse-05.png`,
    title: "Moniter",
  },
  {
    img: `${imgLink}/browse-06.png`,
    title: "Networking",
  },
  {
    img: `${imgLink}/browse-07.png`,
    title: "PC Gaming",
  },
  {
    img: `${imgLink}/browse-08.png`,
    title: "Smartwatches",
  },
  {
    img: `${imgLink}/browse-09.png`,
    title: "Headphones",
  },
  {
    img: `${imgLink}/browse-10.png`,
    title: "Camera & Photo",
  },
  {
    img: `${imgLink}/browse-08.png`,
    title: "Video Games",
  },
  {
    img: `${imgLink}/browse-01.png`,
    title: "Sports",
  },
];

const breakpoints = {
  0: {
    slidesPerView: 2,
    slidesPerGroup: 2,
  },
  640: {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
  992: {
    slidesPerView: 5,
    slidesPerGroup: 5,
  },
  1200: {
    slidesPerView: 7,
    slidesPerGroup: 5,
  },
  1400: {
    slidesPerView: 7,
    slidesPerGroup: 5,
  },
};
