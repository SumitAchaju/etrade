import React from "react";

export default function FooterBottom() {
  return (
    <>
      <div className="container">
        <div className="row py-3 align-items-center">
          <div className="col-12 col-lg-4">
            <div
              style={{ color: "gray" }}
              className="footerbottomicons d-flex align-items-center gap-1"
            >
              <div className="hover-effect-circle">
                <i className="bi bi-facebook d-block"></i>
              </div>
              <div className="hover-effect-circle">
                <i className="bi bi-instagram d-block"></i>
              </div>
              <div className="hover-effect-circle">
                <i className="bi bi-twitter d-block"></i>
              </div>
              <div className="hover-effect-circle">
                <i className="bi bi-linkedin d-block"></i>
              </div>
              <div className="hover-effect-circle">
                <i className="bi bi-discord d-block"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <p className="fw-bold" style={{ color: "gray", fontSize: "14px" }}>
              © 2022. All rights reserved by Axilthemes.
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <p
                className="fw-bold"
                style={{ color: "gray", fontSize: "14px" }}
              >
                Accept For
              </p>
              <img
                height={"20px"}
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/icons/cart/cart-1.png"
                alt="img"
              />
              <img
                height={"20px"}
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/icons/cart/cart-2.png"
                alt="img"
              />
              <img
                height={"20px"}
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/icons/cart/cart-5.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
