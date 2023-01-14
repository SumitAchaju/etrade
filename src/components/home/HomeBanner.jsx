import React from "react";
import { Link } from "react-router-dom";
import "./HomeBanner.style.scss";
import BannerSlider from "../banner/SwiperSlider";
import FeatureBanner from "../banner/FeatureBanner";

export default function HomeBanner() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-xl-2 d-xl-block d-none">
              <ul className="list-group category-list-home">
                {categoriesData.map((item,index) => (
                  <li
                    key={index}
                    className="list-group-item"
                  >
                    <Link to="#">
                      <img
                        src={item.img}
                        alt={`categories${categoriesData.indexOf(item)}`}
                      />{" "}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-7 col-lg-8 ps-xl-4 mt-4">
              <div style={{background:"#F7F7F7"}} className="banner w-100 h-100">
              <BannerSlider/>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 mt-4">
              <FeatureBanner />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const imglink =
  "https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories";

export const categoriesData = [
  {
    title: "Fashion",
    img: `${imglink}/cat-01.png`,
  },
  {
    title: "Electronics",
    img: `${imglink}/cat-02.png`,
  },
  {
    title: "Home Decor",
    img: `${imglink}/cat-03.png`,
  },
  {
    title: "Medicine",
    img: `${imglink}/cat-04.png`,
  },
  {
    title: "Furniture",
    img: `${imglink}/cat-05.png`,
  },
  {
    title: "Crafts",
    img: `${imglink}/cat-06.png`,
  },
  {
    title: "Accessories",
    img: `${imglink}/cat-07.png`,
  },
  {
    title: "Camera",
    img: `${imglink}/cat-08.png`,
  },
];
