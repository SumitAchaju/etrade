// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperSlider.style.scss";
import { Link } from "react-router-dom";

export default function BannerSlider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      loop="true"
      pagination={{ clickable: true }}
      onSlideChange={()=>{}}
    >
      {slideData.map((data, index) => (
        <SwiperSlide key={index} className="h-100">
          <Slides {...data} index isActive />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function Slides(props) {
  return (
    <>
      <div className="bannerslider active-slider w-100 h-100 py-3 row align-items-center justify-content-evenly px-5">
        <div className="banner-content col-6">
          <span
            style={{ fontSize: "14px" }}
            className="d-flex gap-2 align-items-center color-brand fw-bold offernamelogo"
          >
            {props?.offerIcon} {props?.offerName}
          </span>
          <h1 className="offertitle">{props?.offer}</h1>
          <div className="offer-shop-now">
            <Link to={""}>
              Shop Now
              <i className="bi bi-arrow-right "></i>
            </Link>
          </div>
        </div>
        <div className="banner-image col-6 m-auto d-flex justify-content-center">
          <img
            className="offerimage"
            src={props?.offerImage}
            alt="offerImage"
          />
        </div>
      </div>
    </>
  );
}

const slideData = [
  {
    offerIcon: (
      <i
        style={{ fontSize: "13px", padding: "1px 4px" }}
        className="bi bi-patch-check text-light bg-brand rounded-circle "
      ></i>
    ),
    offerName: "Mega Deal",
    offer: "Up to 60% off Sales",
    offerImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-9.png",
  },
  {
    offerIcon: (
      <i
        style={{ fontSize: "13px", padding: "1px 4px" }}
        className="bi bi-fire text-light bg-brand rounded-circle "
      ></i>
    ),
    offerName: "Hot Deal",
    offer: "Up to 60% off Voucher",
    offerImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-8.png",
  },
  {
    offerIcon: (
      <i
        style={{ fontSize: "13px", padding: "1px 4px" }}
        className="bi bi-phone text-light bg-brand rounded-circle "
      ></i>
    ),
    offerName: "Smartphone",
    offer: "Up to 60% off Voucher",
    offerImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-7.png",
  },
];
