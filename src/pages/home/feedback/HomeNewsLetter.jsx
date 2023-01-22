import React from "react";
import "./scss/HomeNewsLetter.style.scss";
import SliderCategory from "../../../components/slider/SliderCategory";

export default function HomeNewsLetter(props) {
  const bgImgStyle = {
    backgroundImage: `url(${props.bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100%",
  };
  return (
    <>
      <section className="mt-5 pt-3">
        <div className="container">
          <div style={bgImgStyle} className="homenews-letter">
            <div className="news-letter-content">
              <SliderCategory {...props} />

              <h4>{props.newsLetterTitle}</h4>

              <div>
                <form action="" className="d-flex align-items-stretch gap-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                  <i className="bi bi-envelope-fill translate-middle-y d-block"></i>
                  <button className="btn btn-dark px-5 py-3">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const newsLetterData = {
  iconColor: "white",
  icon: "bi-envelope-open-fill",
  title: "Newsletter",
  titleColor: "#3577F0",
  newsLetterTitle: "Get weekly update",
  bgImg:
    "https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-12.jpg",
};
