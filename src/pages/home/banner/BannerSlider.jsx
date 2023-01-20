import { EffectFade, Pagination } from "swiper";
import { Link } from "react-router-dom";
import Slider from '../../../components/slider/Slider'

import "swiper/css/effect-fade";
import "./scss/Banner.style.scss";

export default function BannerSlider() {
  return (
    <>
      <Slider
        property={{
          modules: [Pagination, EffectFade],
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
          spaceBetween: 0,
          slidesPerView: 1,
          loop: true,
          speed: 800,
          pagination: { clickable: true },
        }}
        value={{
          SlideCard,
          slideData,
        }}
      />
    </>
  );
}

function SlideCard(props) {
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
