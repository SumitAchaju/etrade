import React from "react";
import SliderCategory from "../../../components/slider/SliderCategory";
import Timer from "../../../components/timer/Timer";
import { motion } from "framer-motion";
import "./scss/HomeOffer.style.scss";
import { Link } from "react-router-dom";

export default function HomeOffer({
  slideCategoryData,
  img,
  title,
  timer,
  checkOutLink,
}) {
  return (
    <>
      <section style={{ margin: "180px 0 100px" }}>
        <div
          style={{ background: "#f7f7f7" }}
          className="container rounded offerhome"
        >
          <div className="p-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6">
                <div className="d-lg-block d-flex justify-content-center">
                  <SliderCategory {...slideCategoryData} />
                </div>
                <div className="my-4 text-lg-start text-center d-lg-block d-flex justify-content-center">
                  <h1>{title}</h1>
                </div>
                <div className="d-lg-block d-flex justify-content-center">
                  <div className="d-flex align-items-center gap-1 gap-lg-3 gap-md-2">
                    <Timer {...timer} />
                  </div>
                </div>
                <div className="d-lg-block d-flex justify-content-center">
                  <motion.div
                    className="offercheckbtn"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link to={checkOutLink}>Check it Out!</Link>
                  </motion.div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="offerhomeimage">
                  <img src={img} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const homeOfferData = {
  checkOutLink: "#",
  slideCategoryData: {
    iconColor: "white",
    icon: "bi-headphones",
    titleColor: "#ff4b7e",
    title: "Don't Miss!!",
  },
  img: "/images/newsletter/bgimage-2.png",
  title: "Enhance Your Music Experience",
  timer: {
    fontSize: "18px",
    deadLine: "2025-6-4",
    area: "70px",
    background: "white",
  },
};
