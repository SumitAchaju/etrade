import React, { useRef } from "react";
import { Navigation } from "swiper";

import SliderCategory from "../../../components/slider/SliderCategory";
import Slider, { breakpoints } from "../../../components/slider/Slider";
import SliderTitle from "../../../components/slider/SliderTitle";
import SliderImage from "../../../components/slider/SliderImage";
import SliderContent from "../../../components/slider/SliderContent";

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
              spanStyle: {
                background: "#f7f7f7",
                fontSize: "14px",
                fontWeight: "bold",
                color: "gray",
                padding: "20px",
              },
              spanContent: "00",
              iconStyle: {
                fontSize: "12px",
                color: "gray",
              },
            }}
            navigationNextRef={navigationNextRef}
            navigationPrevRef={navigationPrevRef}
          />

        </div>
        <Slider
        property={{
          modules:[Navigation],
          spaceBetween:20,
          loop:true,
          speed:800,
          pagination:{ clickable: true },
          navigation:{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          },
          onBeforeInit:(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          },
          breakpoints:breakpoints
        }}
        value={{
          SlideCard,
          slideData
        }}
        />
      </div>
    </>
  );
}

function SlideCard(props) {
  return (
    <>
      <div style={{cursor:"pointer"}} className="flashsale">
        <SliderImage {...props} />
        <SliderContent {...props} />
      </div>
    </>
  );
}

const slideData = [
  {
    title: "Level 20 RGB Cherry",
    previousPrice: 80,
    newPrice: 60,
    discount: 20,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-02.png",
  },
  {
    title: "Sky Blue T-shirt",
    previousPrice: 50,
    newPrice: 40,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-19.png",
  },
  {
    title: "Women's Style Hat",
    previousPrice: 30,
    newPrice: 24,
    discount: 50,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-6.png",
  },
  {
    title: "Diamond Ring",
    previousPrice: 50,
    newPrice: 40,
    discount: 30,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/jewellery/product-4.png",
  },
  {
    title: "Neue Sofa Chair",
    previousPrice: 60,
    newPrice: 50,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/furniture/product-5.png",
  },
  {
    title: "3D™ wireless headset",
    previousPrice: 30,
    newPrice: 24,
    discount: 50,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-04.png",
  },
  {
    title: "Comfortale Chair",
    previousPrice: 80,
    newPrice: 60,
    discount: 25,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/furniture/product-4.png",
  },
  {
    title: "Leather Hand Bag",
    previousPrice: 100,
    newPrice: 75,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-3.png",
  },
];
