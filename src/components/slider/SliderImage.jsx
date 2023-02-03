import React from "react";
import { Link } from "react-router-dom";
import "./scss/SliderImage.style.scss";
import { ProductContentAddCart } from "../productlist/ProductContent";

export default function SliderImage(props) {
  const imgStyle = props.imgStyle ? props.imgStyle : null;
  return (
    <>
      <div className="productimg">
        <div className={`productimgmain ${imgStyle}`}>
        <Link to={`/product/${props.id}`}>
          <img
            className={`w-100 ${imgStyle}`}
            src={props.productImage}
            alt="img"
          />
          </Link>
          {imgStyle ? null : (
            <div className="hover-action-product">
              <ProductContentAddCart {...props} />
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
