import React from "react";
import { Link } from "react-router-dom";

export default function FooterMiddle() {
  return (
    <>
      <div className="container mt-2 pt-5 pb-3 border-top border-bottom">
        <div className="row">
          <div
            style={{ marginBottom: "25px" }}
            className="col-12 col-md-6 col-lg-6 col-xl-3"
          >
            <FooterSupport />
          </div>
          <div
            style={{ marginBottom: "25px" }}
            className="col-12 col-md-6 col-lg-6 col-xl-3"
          >
            <FooterAccountQuickLink {...accountLinkData} />
          </div>
          <div
            style={{ marginBottom: "25px" }}
            className="col-12 col-md-6 col-lg-6 col-xl-3"
          >
            <FooterAccountQuickLink {...quicklinkData} />
          </div>
          <div
            style={{ marginBottom: "25px" }}
            className="col-12 col-md-6 col-lg-6 col-xl-3"
          >
            <FooterDownloadApp />
          </div>
        </div>
      </div>
    </>
  );
}

function FooterSupport() {
  return (
    <>
      <div className="footersupport">
        <div>
          <h4 style={{ fontSize: "19px" }} className="mb-4 fw-bold">
            Support
          </h4>
        </div>
        <div>
          <ul style={{ color: "gray" }} className="mb-4 lh-lg">
            <li>685 Market Street, </li>
            <li>Las Vegas, LA 95820, </li>
            <li>United States. </li>
          </ul>
          <ul style={{ color: "gray" }}>
            <li className="d-flex align-items-center gap-2 lh-lg">
              <i className="bi bi-envelope-open"></i>
              <Link to="">example@domain.com</Link>
            </li>
            <li className="d-flex align-items-center gap-2 lh-lg">
              <i className="bi bi-telephone"></i>
              <Link to="">(+01) 850-315-5862</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function FooterAccountQuickLink(props) {
  return (
    <>
      <div className="footeraccountquicklink">
        <div>
          <h4 style={{ fontSize: "19px" }} className="mb-4 fw-bold">
            {props.title}
          </h4>
        </div>
        <div>
          <ul>
            {props.links.map((item, index) => (
              <li key={index} style={{ lineHeight: "38px" }}>
                <Link
                  className="fw-medium"
                  style={{ fontSize: "17px", color: "gray" }}
                  to=""
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function FooterDownloadApp() {
  return (
    <>
      <div>
        <div>
          <h4 style={{ fontSize: "19px" }} className="mb-4 fw-bold">
            Download App
          </h4>
        </div>
        <div>
          <p style={{ color: "gray" }} className="mb-3">
            Save $3 With App & New User only
          </p>
          <div className="d-flex align-items-center gap-3">
            <Link className="d-block" to="">
              <img
                width={"98px"}
                src="/images/footerimage/qr.png"
                alt="qr code"
              />
            </Link>
            <div>
              <Link to="" className="d-block mb-3">
                <img
                  width={"140px"}
                  src="/images/footerimage/app-store.png"
                  alt="link"
                />
              </Link>
              <Link to="">
                <img
                  width={"140px"}
                  src="/images/footerimage/play-store.png"
                  alt="link"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const accountLinkData = {
  title: "Account",
  links: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
};
const quicklinkData = {
  title: "Quick Link",
  links: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact", "Contact"],
};
