import { SocialIcons } from "../productlist/ProductContent";
import "./scss/ProductDetail.style.scss";
import React from "react";
import {
  ProductContentCounter,
  ProductContentPrice,
  ProductContentSelectColor,
  ProductContentStar,
} from "../productlist/ProductContent";

import { motion } from "framer-motion";

export default function ProductDetail(props) {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={props?.productImage} alt="img" />
        </div>
        <div className="col-12 col-md-6 mt-2">
          <ProductContentStar {...props} />
          <p>
            <strong>Avaibility:</strong> {props?.inStock} in Stock
          </p>
          <h2 className="my-2 fs-3">{props?.title}</h2>
          <ProductContentPrice {...props} fontSize="22px" />
          <p className="my-4">{props?.description[0].slice(0, 202)}</p>
          <div className="d-flex align-items-center gap-4">
            <p style={{ fontSize: "18px" }}>
              <strong>Colors:</strong>
            </p>
            <ProductContentSelectColor {...props} />
          </div>
          <div className="row align-items-center mt-4">
            <div className="col-4 col-lg-3">
              <ProductContentCounter />
            </div>
            <div className="col-8 col-lg-9">
              <motion.div
                style={{ display: "inline-block" }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <button
                  style={{ background: "#ff4b7e", color: "white" }}
                  className="btn px-3 py-2 fw-bold"
                >
                  Add to Cart
                </button>
              </motion.div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 mt-3">
            <div className="d-flex align-items-center gap-1 addtowishlist">
              <i className="bi bi-heart d-block"></i>
              <span>Add to Wishlist</span>
            </div>
            <div className="d-flex align-items-center gap-1 addtowishlist">
              <i className="bi bi-braces d-block"></i>
              <span>Add to Compare</span>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 mt-3">
            <p style={{ fontSize: "18px" }}>
              <strong>Share:</strong>
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  );
}
