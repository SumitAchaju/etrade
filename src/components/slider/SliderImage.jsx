import React from "react";
import "./scss/SliderImage.style.scss";
import { ProductContentAddCart } from "../productlist/ProductContent";

export default function SliderImage(props) {
  const imgStyle = props.imgStyle ? props.imgStyle : null;
  return (
    <>
      <div className="productimg">
        <div className={`productimgmain ${imgStyle}`}>
          <img
            className={`w-100 ${imgStyle}`}
            src={props.productImage}
            alt="img"
          />
          {imgStyle ? null : (
            <div className="hover-action-product">
              <ProductContentAddCart />
            </div>
          )}
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
