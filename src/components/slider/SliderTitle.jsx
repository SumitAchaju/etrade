import React from "react";
import Timer from "../timer/Timer";

export default function SliderTitle({
  title,
  timer,
  navigationNextRef,
  navigationPrevRef,
  styleClass
}) {
  const navStyle ={
    color: "gray",
    fontSize: "18px",
    cursor:"pointer",
    padding:"13px 18px",
  }
  const styleClassDiv = styleClass?styleClass:"mb-5"
  return (
    <>
      <div className={`row align-items-start ${styleClassDiv}`}>
        <div className="col-8 col-lg-10">
          <div className="row">

        <h2
          className={timer ? "col-12 col-lg-4 col-xl-3 mb-3" : "col-12"}
          style={{ fontWeight: 700, fontSize: "35px" }}
        >
          {title}
        </h2>
        {timer ? (
          <div className="col-12 col-lg-8 col-xl-9 timer d-flex align-items-center gap-1 gap-sm-2">
            <Timer {...timer} />
          </div>
        ) : null}
          </div>

        </div>
        <div className={"slidernavigation d-flex align-items-center gap-1 gap-sm-2 justify-content-end col-4 col-lg-2"}>
          <div ref={navigationPrevRef} style={{  background: "#f7f7f7"}} className="prev hover-effect-circle">
            <i
              style={navStyle}
              className="bi bi-arrow-left rounded-circle"
            ></i>
          </div>
          <div ref={navigationNextRef} style={{  background: "#f7f7f7"}}  className="next hover-effect-circle">
            <i
              style={navStyle}
              className="bi bi-arrow-right rounded-circle"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}
