import React from "react";
import { Link } from "react-router-dom";
import "./scss/HomeBanner.style.scss";
import BannerSlider from "./BannerSlider";
import FeatureBanner from "./FeatureBanner";
import { categoriesData } from "../../../components/header/Navigation";

export default function HomeBanner() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-xl-2 d-xl-block d-none">
              <Categories />
            </div>
            <div className="col-xl-7 col-lg-8 ps-xl-4 mt-4">
              <div
                style={{ background: "#F7F7F7" }}
                className="banner w-100 h-100"
              >
                <BannerSlider />
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

function Categories() {
  return (
    <>
      <ul className="list-group category-list-home">
        {categoriesData.map((item, index) => (
          <li key={index} className="list-group-item">
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
    </>
  );
}

