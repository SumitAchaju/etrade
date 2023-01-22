import React, { useRef } from "react";
import SliderCategory from "../../../components/slider/SliderCategory";
import SliderTitle from "../../../components/slider/SliderTitle";
import SliderImage from "../../../components/slider/SliderImage";
import Slider from "../../../components/slider/Slider";
import { Navigation } from "swiper";
import { breakpoints } from "../../../components/slider/Slider";
import { SliderContent1 } from "../../../components/slider/SliderContent";

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

const slideData = [
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-05.png",
    star: 4.5,
    reviewNo: 18,
    title: "Bass Meets Clarity",
    previousPrice: 40,
    newPrice: 33,
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-15.png",
    star: 5,
    reviewNo: 31,
    title: "Nike Shoes",
    previousPrice: 80,
    newPrice: 100,
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/furniture/product-24.png",
    star: 3,
    reviewNo: 20,
    title: "Stylish Chair",
    newPrice: 55,
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/jewellery/product-10.png",
    star: 3.5,
    reviewNo: 53,
    title: "Diamond Bracelet",
    newPrice: 99,
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-25.png",
    star: 2.5,
    reviewNo: 25,
    title: "Smart Watch",
    previousPrice: 35,
    newPrice: 30,
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-10.png",
    star: 5,
    reviewNo: 101,
    title: "Womens Cosmetics",
    newPrice: 66,
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/jewellery/product-12.png",
    star: 3.5,
    reviewNo: 5,
    title: "Denim White Ring",
    newPrice: 40,
    previousPrice: 60,
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-13.png",
    star: 5,
    reviewNo: 24,
    title: "Royal Watch",
    newPrice: 96,
  },
];
