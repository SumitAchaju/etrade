import React from "react";
import "./scss/SliderContent.style.scss";

export default function SliderContent(props) {
  return (
    <>
      <div className="productcontent">
        <p
          className="text-center fw-bold mt-4"
          style={{ fontSize: "17px", color: "#757575" }}
        >
          {props.title}
        </p>
        <div className="d-flex gap-2 justify-content-center">
          <span
            style={{
              color: "gray",
              textDecoration: "line-through",
              textDecorationColor: "gray",
              fontWeight: "bold",
            }}
          >
            ${props.perviousPrice}
          </span>
          <span
            style={{ fontWeight: "bold", fontSize: "18px", color: "#757575" }}
          >
            ${props.newPrice}
          </span>
        </div>
      </div>
    </>
  );
}

export function SliderContent1(props) {
  const { star } = props;
  const fullStar = Array.from({ length: star }).map((_, i) => i + 1);
  const emptyStar = Array.from({ length: 5 - star }).map((_, i) => i + 1);
  const halfStar = star % 1 !== 0 ? 1 : 0;
  return (
    <>
      <div>
        <div className="staricons d-flex gap-1 mt-4">
          <div>
            {fullStar.map((num) => (
              <i
                key={num}
                style={{ color: "#FFDC60" }}
                className="bi bi-star-fill"
              ></i>
            ))}
            {halfStar ? (
              <i style={{ color: "#FFDC60" }} className="bi bi-star-half"></i>
            ) : null}
            {emptyStar.map((num) => (
              <i
                key={num}
                style={{ color: "#FFDC60" }}
                className="bi bi-star"
              ></i>
            ))}
          </div>
          <span style={{ color: "gray" }}>{`(${props.reviewNo})`}</span>
        </div>
        <h6 style={{ color: "gray" }} className="my-2">
          {props.title}
        </h6>
        <div className="price d-flex gap-2 pt-1">
          <span
            style={{ color: "#303030", fontSize: "18px", fontWeight: "bold" }}
          >
            ${props.newPrice}
          </span>
          {props.previousPrice ? (
            <span
              style={{
                color: "#c2c2c2",
                textDecoration: "line-through #c2c2c2",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              ${props.previousPrice}
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
}

export function SliderContent2(props) {
  function selectColor(event){
    const prevColor = document.querySelector(".selected")
    prevColor.classList.remove("selected")
    event.target.classList.add("selected")
  }
  return (
    <>
      <div>
        <div className="mt-4">
          <h6 style={{ color: "gray" }}>{props.title}</h6>
        </div>
        <div className="my-2">
          <div className="price d-flex gap-2">
            <span
              style={{ color: "#303030", fontSize: "18px", fontWeight: "bold" }}
            >
              ${props.newPrice}
            </span>
            {props.previousPrice ? (
              <span
                style={{
                  color: "#c2c2c2",
                  textDecoration: "line-through #c2c2c2",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                ${props.previousPrice}
              </span>
            ) : null}
          </div>
        </div>
        <div className="select-color pt-1">
          <div className="d-flex align-items-center gap-3">
            {props.color.map((item, index) => (
              <span
                style={{ "--color-option-select": item,background:item }}
                className={`${
                  index === 0 ? "selected" : ""
                } rounded-circle color d-block`}
                onClick={(event)=>selectColor(event)}
              >
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
