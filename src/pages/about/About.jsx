import React, { useRef } from "react";
import BreadCrumbs from "../../components/breadcums/BreadCrumbs";
import AboutComponent, { AboutComponentFeaturesLeft, AboutComponentFeaturesRight, AboutComponentTags } from "./AboutComponent";
import SliderCategory from "../../components/slider/SliderCategory";
import SliderTitle from "../../components/slider/SliderTitle";
import { Navigation } from "swiper";
import Slider, { breakpoints } from "../../components/slider/Slider";

import "./scss/About.style.scss";

export default function About() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <>
      <section className="about">
        <BreadCrumbs title="About Our Store" link={["Home", "About"]} />
        <div className="container mb-5">
          <AboutComponent {...aboutComponentData1} />
        </div>
        <div>
          <AboutComponentTags tagData={aboutComponentDataTagsData} />
        </div>
        <div style={{ background: "#F6F6F6" }} className="py-5">
          <div className="container pt-5">
            <SliderCategory
              iconColor="white"
              icon="bi-people-fill"
              titleColor="#8C71DB"
              title="Our Team"
            />
            <SliderTitle
              title="Expert Management Team"
              navigationNextRef={navigationNextRef}
              navigationPrevRef={navigationPrevRef}
            />
            <Slider
              property={{
                modules: [Navigation],
                spaceBetween: 50,
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
              }}
              value={{
                SlideCard,
                slideData,
              }}
            />
          </div>
        </div>
        <div className="container my-5 py-3">
          <AboutComponentFeaturesLeft {...featureData[0]} />
        </div>
        <div className="container my-5 py-3">
          <AboutComponentFeaturesRight {...featureData[1]} />
        </div>
      </section>
    </>
  );
}

function SlideCard(props) {
  return (
    <>
      <div className="aboutslidecardteam">
        <div style={{ overflow: "hidden" }} className="rounded">
          <img className="w-100" src={props.img} alt="img" />
        </div>
        <div className="mt-4">
          <span style={{ color: "gray", display: "block" }}>
            {props.position}
          </span>
          <h2 className="mt-2 fw-bold" style={{ fontSize: "20px" }}>
            {props.name}
          </h2>
        </div>
      </div>
    </>
  );
}

const slideData = [
  {
    img: "https://new.axilthemes.com/demo/template/etrade/assets/images/team/team-01.png",
    position: "Founder",
    name: "Rosalina D. Willson",
  },
  {
    img: "https://new.axilthemes.com/demo/template/etrade/assets/images/team/team-02.png",
    position: "CEO",
    name: "Ukolili X. Xilanorix",
  },
  {
    img: "https://new.axilthemes.com/demo/template/etrade/assets/images/team/team-03.png",
    position: "Desiginer",
    name: "Alanso M. Mikolanax",
  },
  {
    img: "https://new.axilthemes.com/demo/template/etrade/assets/images/team/team-04.png",
    position: "Desiginer",
    name: "Alanso M. Mikolanax",
  },
];

const aboutComponentData1 = {
  img: "https://new.axilthemes.com/demo/template/etrade/assets/images/about/about-01.png",
  icon: {
    iconColor: "white",
    icon: "bi-basket",
    titleColor: "#3577F0",
    title: "About Store",
  },
  title: "Online shopping includes both buying things online.",
  subTitle:
    "Salesforce B2C Commerce can help you create unified, intelligent digital commerce experiences — both online and in the store.",
  description: [
    "Empower your sales teams with industry tailored solutions that support manufacturers as they go digital, and adapt to changing markets & customers faster by creating new business.",
    "Salesforce B2B Commerce offers buyers the seamless, self-service experience of online shopping with all the B2B",
  ],
};

const aboutComponentDataTagsData = [
  {
    img: "https://new.axilthemes.com/demo/template/etrade/assets/images/about/shape-01.png",
    title: "40,000+ Happy Customer",
    description:
      "Empower your sales teams with industry tailored solutions that support.",
  },
  {
    img: "https://new.axilthemes.com/demo/template/etrade/assets/images/about/shape-02.png",
    title: "16 Years of Experiences",
    description:
      "Empower your sales teams with industry tailored solutions that support.",
  },
  {
    img: "https://new.axilthemes.com/demo/template/etrade/assets/images/about/shape-03.png",
    title: "12 Awards Won",
    description:
      "Empower your sales teams with industry tailored solutions that support.",
  },
];
const featureData=[
  {
    img:"https://new.axilthemes.com/demo/template/etrade/assets/images/about/about-02.png",
    feature:"Features #01",
    title:"Solutions that work together",
    description:"Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services."
  },
  {
    img:"https://new.axilthemes.com/demo/template/etrade/assets/images/about/about-03.png",
    feature:"Features #02",
    title:"Solutions that work together",
    description:"Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services."
  },
]