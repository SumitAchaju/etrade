import React from "react";
import { useState } from "react";
import ProductDescription from "../../components/productsingle/ProductDescription";
import ProductAdditionalInfo from "../../components/productsingle/ProductAdditionalInfo";
import "./scss/ProductInfo.style.scss";
import ProductReview from "../../components/productsingle/ProductReview";

export default function ProductInfo(props) {
  const [show, setShow] = useState("description");
  return (
    <>
      <div className="product-info d-flex justify-content-center align-items-center gap-5">
        <span
          className={show === "description" ? "product-info-active" : ""}
          onClick={() => setShow("description")}
        >
          Description
        </span>
        <span
          className={show === "additional" ? "product-info-active" : ""}
          onClick={() => setShow("additional")}
        >
          Additional Information
        </span>
        <span
          className={show === "review" ? "product-info-active" : ""}
          onClick={() => setShow("review")}
        >
          Review
        </span>
      </div>
      {show === "description" && (
        <div className="product-info-box">
          <ProductDescription {...props} />
        </div>
      )}
      {show === "additional" && (
        <div className="product-info-box">
          <ProductAdditionalInfo {...props} />
        </div>
      )}
      {show === "review" && (
        <div className="product-info-box">
          <ProductReview {...props} />
        </div>
      )}
    </>
  );
}
