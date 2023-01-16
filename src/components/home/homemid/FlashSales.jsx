import React, { useRef } from "react";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./FlashSales.style.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function FlashSales() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  return (
    <>
      <div className="container my-5 pt-4">
        <div className="todayflashsales">
          <div className="d-flex align-items-center gap-2 mb-2">
            <i style={{color:"white",background:"#8c71db",fontSize:"12px",padding:"5px 7px"}} className="bi bi-fire rounded-circle"></i>
            <span style={{color:"#8c71db",fontSize:"16px",fontWeight:"bold"}}>Today's</span>
          </div>
          <div className="row mb-5">
            <h2 className="col-12 col-lg-3" style={{fontWeight:700,fontSize:"35px"}}>Flash Sales</h2>
            <div className="col-8 col-lg-7 timer d-flex align-items-center gap-1 gap-sm-2">
              <span style={{background:"#f7f7f7",fontSize:"14px",fontWeight:"bold",color:"gray"}} className="rounded-circle p-4">00</span>
              <i style={{fontSize:"12px",color:"gray"}} className="bi bi-three-dots-vertical"></i>
              <span style={{background:"#f7f7f7",fontSize:"14px",fontWeight:"bold",color:"gray"}} className="rounded-circle p-4">00</span>
              <i style={{fontSize:"12px",color:"gray"}} className="bi bi-three-dots-vertical"></i>
              <span style={{background:"#f7f7f7",fontSize:"14px",fontWeight:"bold",color:"gray"}} className="rounded-circle p-4">00</span>
              <i style={{fontSize:"12px",color:"gray"}} className="bi bi-three-dots-vertical"></i>
              <span style={{background:"#f7f7f7",fontSize:"14px",fontWeight:"bold",color:"gray"}} className="rounded-circle p-4">00</span>
            </div>
            <div className="col-4 col-lg-2 slidernavigation d-flex align-items-center gap-1 gap-sm-2 justify-content-end">
              <div ref={navigationPrevRef} className="prev">
              <i style={{background:"#f7f7f7",color:"gray",fontSize:"18px"}} className="bi bi-arrow-left p-3 rounded-circle"></i>
              </div>
              <div ref={navigationNextRef} className="next">
              <i style={{background:"#f7f7f7",color:"gray",fontSize:"18px"}} className="bi bi-arrow-right p-3 rounded-circle"></i>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          loop="true"
          speed={800}
          className="myswipper m-auto"
          pagination={{ clickable: true }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
         onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
         }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup:2
            },
            992: {
              slidesPerView: 3,
              slidesPerGroup:3
            },
            1200: {
              slidesPerView: 4,
              slidesPerGroup:4
            },
            1400: {
              slidesPerView: 4,
              slidesPerGroup:4
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
          <p className="text-center fw-bold mt-4">{item.title}</p>
          <div className="d-flex gap-1 justify-content-center">
            <span style={{color:"gray",textDecoration:"line-through"}}>${item.perviousPrice}</span>
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
    title: "Sky Blue T-shirt",
    perviousPrice: 50,
    newPrice: 40,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-19.png",
  },
  {
    title: "Women's Style Hat",
    perviousPrice: 30,
    newPrice: 24,
    discount: 50,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-6.png",
  },
  {
    title: "Diamond Ring",
    perviousPrice: 50,
    newPrice: 40,
    discount: 30,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/jewellery/product-4.png",
  },
  {
    title: "Neue Sofa Chair",
    perviousPrice: 60,
    newPrice: 50,
    discount: 30,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/furniture/product-5.png",
  },
  {
    title: "3D™ wireless headset",
    perviousPrice: 30,
    newPrice: 24,
    discount: 50,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-04.png",
  },
  {
    title: "Comfortale Chair",
    perviousPrice: 80,
    newPrice: 60,
    discount: 25,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/furniture/product-4.png",
  },
  {
    title: "Leather Hand Bag",
    perviousPrice: 100,
    newPrice: 75,
    discount: 25,
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-3.png",
  },
];
