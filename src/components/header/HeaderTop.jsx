import React from "react";
import { Link } from "react-router-dom";
import "./scss/HeaderTop.style.scss";

export default function HeaderTop() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row my-4">
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <Link to="/">
                <img
                  src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png"
                  alt="brand-logo"
                />
              </Link>
            </div>
            <div className="col-lg-8 col-md-6  d-sm-none d-md-block d-none">
              <form action="" className="position-relative">
                <input
                  className="form-control ps-5 ms-5 homeheadertop-input"
                  type="text"
                  placeholder="What are you looking for..."
                />
                <i
                  className="ms-5 bi bi-search position-absolute top-50 translate-middle-y"
                  style={{ left: "15px", cursor: "pointer" }}
                ></i>
              </form>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <div className="d-flex gap-2 justify-content-end">
                <Dropdown {...dropdownCurrencyData}/>
                <Dropdown {...dropdownLanguageData}/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function Dropdown({ title, list }) {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle bg-transparent py-2 fw-bold"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            minWidth: "80px",
            border: "1px solid #d1d1d1",
            fontSize: "14px",
          }}
        >
          {title}
        </button>
        <ul
          className="dropdown-menu"
          style={{ minWidth: "100%", fontSize: "14px" }}
        >
          {list.map((item,index) => (
            <li key={index}>
              <Link className="dropdown-item" to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const dropdownCurrencyData = {
  title: "USD",
  list: [
    { title: "USD", link: "#" },
    { title: "AUD", link: "#" },
    { title: "EUR", link: "#" },
  ],
};
const dropdownLanguageData = {
  title: "EN",
  list: [
    { title: "EN", link: "#" },
    { title: "ARB", link: "#" },
    { title: "SPN", link: "#" },
  ],
};
