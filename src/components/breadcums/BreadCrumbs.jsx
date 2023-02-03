import React from "react";
import { Link } from "react-router-dom";
import "./scss/BreadCrumbs.style.scss";

export default function BreadCrumbs({ title, link }) {
  return (
    <>
      <section
        className="py-4 mb-5 my-costum-breadcrumb"
        style={{ background: "#F4F5F8" }}
      >
        <div className="container d-flex align-items-center justify-content-between my">
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                {link.map((item, index) => (
                  <li
                    key={index}
                    className={`breadcrumb-item ${
                      index + 1 === link.length ? "breadcrumbsactive" : ""
                    }`}
                    aria-current="page"
                  >
                    <Link
                      to={`${item === "Home" ? "/" : ""}${
                        index + 1 === link.length ? "#" : ""
                      }${
                        (item !== "Home") & (index + 1 !== link.length)
                          ? "/" + item.toLowerCase()
                          : ""
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
            <h2 className="fs-1 fw-bold">{title}</h2>
          </div>
          <div>
            <img
              src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-45.png"
              alt="iimg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
