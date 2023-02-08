import React from "react";
import SliderCategory from "../../components/slider/SliderCategory";
import "./scss/AboutComponent.style.scss";

export default function AboutComponent(props) {
  const iconData = props.icon;
  return (
    <div className="row align-items-center">
      <div className="col-xl-4 col-lg-6">
        <div className="about-thumbnail">
          <img className="w-100" src={props.img} alt="img" />
        </div>
      </div>
      <div className="col-xl-8 col-lg-6 px-lg-5 mt-4 mt-lg-0">
        <div>
          <SliderCategory {...iconData} />
        </div>
        <div>
          <h2>{props.title}</h2>
        </div>
        <div className="my-4 fs-5" style={{ color: "gray" }}>
          <span>{props.subTitle}</span>
        </div>
        <div>
          <div className="row">
            {props.description.map((item, index) => (
              <div key={index} className="col-lg-6" style={{ color: "gray" }}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutComponentTags(props) {
  return (
    <>
      <div className="aboutcomponenttag">
        <div className="container">
          <div className="row">
            {props.tagData.slice(0, 3).map((item, index) => (
              <div className="col-lg-4">
                <AboutComponentTagsSingle {...item} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
function AboutComponentTagsSingle(props) {
  return (
    <>
      <div key={props.key} className="px-5 py-lg-5 py-4 mb-5 rounded mb-lg-0 aboutcomponenttagbox">
        <div>
          <img
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
            src={props.img}
            alt="img"
          />
        </div>
        <h4 className="my-3 fw-bold" style={{ fontSize: "20px" }}>
          {props.title}
        </h4>
        <p style={{ color: "gray" }}>{props.description}</p>
      </div>
    </>
  );
}

export function AboutComponentFeaturesLeft(props) {
  return (
    <>
      <div className="row align-items-center feature-about">
        <div className="col-lg-5">
          <div className="about-thumbnail">
            <img className="w-100 rounded" src={props.img} alt="img" />
          </div>
        </div>
        <div className="col-lg-7 px-lg-5 mt-4 mt-lg-0">
          <div>
            <span>{props.feature}</span>
          </div>
          <div className="my-2">
            <h2>{props.title}</h2>
          </div>
          <div className="my-4" style={{ color: "gray" }}>
            <p>{props.description}</p>
          </div>
          <div>
            <button>Get In Touch</button>
          </div>
        </div>
      </div>
    </>
  );
}
export function AboutComponentFeaturesRight(props) {
  return (
    <>
      <div className="row align-items-center feature-about">
        <div className="col-lg-7 px-lg-5 mb-4 mb-lg-0">
          <div>
            <span>{props.feature}</span>
          </div>
          <div className="my-2">
            <h2>{props.title}</h2>
          </div>
          <div className="my-4" style={{ color: "gray" }}>
            <p>{props.description}</p>
          </div>
          <div>
            <button>Get In Touch</button>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="about-thumbnail">
            <img className="w-100 rounded" src={props.img} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}
