import React from "react";

export default function FooterTop() {
  return (
    <>
      <div className="container">
        <div className="row">
          {footerTopData.map((item, index) => (
            <div
              style={{ marginBottom: "30px" }}
              key={index}
              className="col-12 col-md-6 col-lg-6 col-xl-3"
            >
              <FooterTopSingle {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function FooterTopSingle(props) {
  return (
    <>
      <div className="d-flex align-items-center gap-2">
        <div>
          <img width={"45px"} src={props.iconImg} alt="icons" />
        </div>
        <div>
          <p className="fw-bold mb-1">{props.title}</p>
          <p style={{ color: "gray" }}>{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export const footerTopData = [
  {
    iconImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service1.png",
    title: "Fast & Secure Delivery",
    desc: "Tell about your service.",
  },
  {
    iconImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service2.png",
    title: "Money Back Guarantee",
    desc: "Within 10 days.",
  },
  {
    iconImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service3.png",
    title: "24 Hour Return Policy",
    desc: "No question ask.",
  },
  {
    iconImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service4.png",
    title: "Pro Quality Support",
    desc: "24/7 Live support.",
  },
];
