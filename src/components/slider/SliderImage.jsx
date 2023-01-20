import React from "react";
import './scss/SliderImage.style.scss';

export default function SliderImage(props) {
  return (
    <>
      <div className="productimg">
        <div className="productimgmain">
          <img className="w-100" src={props.productImage} alt="img" />
          <div className="hover-action-product d-flex align-items-center">
            <i className="bi bi-heart rounded"></i>
            <button className="btn">Add to Cart</button>
            <i className="bi bi-eye rounded"></i>
          </div>
        </div>
        {props.discount ? (
          <div className="product-discount rounded">
            <span>{props.discount}% OFF</span>
          </div>
        ) : null}
      </div>
    </>
  );
}
