import React from "react";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./FlashSales.style.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function FlashSales() {
  return (
    <>
      <div className="container my-5">
        <div className="todayflashsales">
          <div className="flex">
            <i className="bi bi-fire"></i>
            <span>Todays Sales</span>
          </div>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          className="myswipper m-auto"
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <SlideCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

function SlideCard({ item }) {
  return (
    <>
      <div className="flashsale">
        <div className="flashproductmainimg">
          <div className="flashproductimg">
            <img className="w-100" src={item.productImage} alt="img" />
            <div className="hover-action-product d-flex align-items-center">
              <i className="bi bi-heart rounded"></i>
              <button className="btn">Add to Cart</button>
              <i className="bi bi-eye rounded"></i>
            </div>
          </div>
          {item.discount ? (
            <div className="product-discount rounded">
              <span>{item.discount}% OFF</span>
            </div>
          ) : null}
        </div>
        <div className="flashproductcontent">
          <p>{item.title}</p>
          <div className="d-flex">
            <span>${item.perviousPrice}</span>
            <span>${item.newPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    title: "Level 20 RGB Cherry",
    perviousPrice: 80,
    newPrice: 60,
    discount: 20,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-02.png",
  },
  {
    title: "Level 20 RGB Cherry",
    perviousPrice: 80,
    newPrice: 60,
    discount: 20,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-19.png",
  },
  {
    title: "Level 20 RGB Cherry",
    perviousPrice: 80,
    newPrice: 60,
    discount: 20,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-6.png",
  },
  {
    title: "Level 20 RGB Cherry",
    perviousPrice: 80,
    newPrice: 60,
    discount: 20,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/jewellery/product-4.png",
  },
  {
    title: "Level 20 RGB Cherry",
    perviousPrice: 80,
    newPrice: 60,
    discount: 20,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/furniture/product-5.png",
  },
  {
    title: "Level 20 RGB Cherry",
    perviousPrice: 80,
    newPrice: 60,
    discount: 20,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-04.png",
  },
  {
    title: "Level 20 RGB Cherry",
    perviousPrice: 80,
    newPrice: 60,
    discount: 20,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/furniture/product-4.png",
  },
  {
    title: "Level 20 RGB Cherry",
    perviousPrice: 80,
    newPrice: 60,
    discount: 20,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-3.png",
  },
];
