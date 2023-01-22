import React from "react";
import "./scss/ProductContent.style.scss";

export default function ProductContentTitle(props) {
  return (
    <>
      <p
        className={`fw-bold ${props?.className}`}
        style={{fontSize: props.fontSize?props.fontSize:"17px", color: "#757575" }}
      >
        {props.title}
      </p>
    </>
  );
}

export function ProductContentPrice(props) {
  return (
    <>
      <div className={`price d-flex gap-2 ${props?.className}`}>
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
    </>
  );
}

export function ProductContentStar(props) {
  const { star } = props;
  const fullStar = Array.from({ length: star }).map((_, i) => i + 1);
  const emptyStar = Array.from({ length: 5 - star }).map((_, i) => i + 1);
  const halfStar = star % 1 !== 0 ? 1 : 0;
  return (
    <>
      <div className={`staricons d-flex gap-1 ${props?.className}`}>
        <div>
          {fullStar.map((num) => (
            <i
              key={num}
              style={{ color: "#FFDC60",fontSize:props?.fontSize }}
              className="bi bi-star-fill"
            ></i>
          ))}
          {halfStar ? (
            <i style={{ color: "#FFDC60",fontSize:props?.fontSize }} className="bi bi-star-half"></i>
          ) : null}
          {emptyStar.map((num) => (
            <i
              key={num}
              style={{ color: "#FFDC60",fontSize:props?.fontSize }}
              className="bi bi-star"
            ></i>
          ))}
        </div>
        <span
          style={{ color: "gray", fontSize: "14px" }}
        >{`(${props.reviewNo})`}</span>
      </div>
    </>
  );
}

export function ProductContentSelectColor(props) {
  function selectColor(event) {
    const prevColor = document.querySelector(".selected");
    prevColor.classList.remove("selected");
    event.target.classList.add("selected");
  }

  return (
    <>
      <div
        className={`d-flex align-items-center gap-3 select-color ${props?.className}`}
      >
        {props.color.map((item, index) => (
          <span
            key={index}
            style={{ "--color-option-select": item, background: item }}
            className={`${
              index === 0 ? "selected" : ""
            } rounded-circle color d-block`}
            onClick={(event) => selectColor(event)}
          ></span>
        ))}
      </div>
    </>
  );
}

export function ProductContentAddCart(props) {
  return (
    <>
      <div
        className={`product-add-cart gap-2 d-flex align-items-center ${props?.className}`}
      >
        <i className="bi bi-heart rounded"></i>
        <button className="btn">Add to Cart</button>
        <i className="bi bi-eye rounded"></i>
      </div>
    </>
  );
}
