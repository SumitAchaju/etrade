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
  "https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories";

const slideData = [
  {
    img: `${imgLink}/elec-4.png`,
    title: "Phones",
  },
  {
    img: `${imgLink}/elec-5.png`,
    title: "Computers",
  },
  {
    img: `${imgLink}/elec-11.png`,
    title: "Accessories",
  },
  {
    img: `${imgLink}/elec-6.png`,
    title: "Laptops",
  },
  {
    img: `${imgLink}/elec-2.png`,
    title: "Moniter",
  },
  {
    img: `${imgLink}/elec-7.png`,
    title: "Networking",
  },
  {
    img: `${imgLink}/elec-8.png`,
    title: "PC Gaming",
  },
  {
    img: `${imgLink}/elec-1.png`,
    title: "Smartwatches",
  },
  {
    img: `${imgLink}/elec-9.png`,
    title: "Headphones",
  },
  {
    img: `${imgLink}/elec-10.png`,
    title: "Camera & Photo",
  },
  {
    img: `${imgLink}/elec-8.png`,
    title: "Video Games",
  },
  {
    img: `${imgLink}/elec-1.png`,
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
