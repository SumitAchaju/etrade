import React from "react";
import { Link } from "react-router-dom";
import "./HomeNavigation.style.scss";
import OffCanvas from "../offcanvas/OffCanvas";
import { categoriesData } from "./HomeBanner";

export default function HomeNavigation() {
  return (
    <>
      <nav className="navlink-home-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-md-5 col-xl-2 col-lg-3 col-sm-6">
              <button
                className="btn btn-primary gap-2 justify-content-start d-flex align-items-center py-3 rounded-0 px-5 w-100"
                data-bs-toggle="offcanvas"
                data-bs-target="#startcategory"
                aria-controls="startcategory"
              >
                <i className="bi bi-list"></i>
                <div>Categories</div>
              </button>
            </div>
            <div className="col-lg-8 d-md-none d-lg-block d-none">
              <div className="d-flex align-items-center gap-5 ms-5 navlinks-home">
                {HomeNavLinks.map((item,index) => (
                  <Link key={`navlinkhome${index}`} to={item.route}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-xl-2 col-lg-1 col-md-7 col-6 home-navbar-icons">
              <div className="d-flex gap-3 align-items-center justify-content-end">
                <Link to=" ">
                  <i className="bi bi-heart"></i>
                </Link>
                <Link
                  data-bs-toggle="offcanvas"
                  data-bs-target="#endcart"
                  aria-controls="endcart"
                  to=""
                >
                  <i className="bi bi-cart" value="3"></i>
                </Link>
                <Link to=" ">
                  <i className="bi bi-person"></i>
                </Link>
                <Link
                  data-bs-toggle="offcanvas"
                  data-bs-target="#endmenu"
                  aria-controls="endmenu"
                  className="d-lg-none d-xl-none"
                  to=""
                >
                  <i className="bi bi-list"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <OffCanvas
        width="250px"
        offCanvasBody={menuOffCanvasBody}
        canvasId="endmenu"
        align="end"
        title="Menu"
      />
      <OffCanvas
        width="250px"
        offCanvasBody={categoryOffCanvasBody}
        canvasId="startcategory"
        align="start"
        title="Categories"
      />
      <OffCanvas
        offCanvasBody={cartOffCanvasBody}
        canvasId="endcart"
        align="end"
        title="Cart Items"
      />
    </>
  );
}

function menuOffCanvasBody() {
  return (
    <>
      <form className="position-relative mb-5">
        <input
          className="form-control pe-5"
          type="text"
          placeholder="Search..."
        />
        <i className="offcanvas-menu-search-icon bi bi-search position-absolute translate-middle-y top-50"></i>
      </form>
      <ul className="offcanvas-menu">
        {HomeNavLinks.map((item,index) => (
          <li key={`menucanvasbody${index}`}>
            <Link to={item.route}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function categoryOffCanvasBody() {
  return (
    <ul className="offcanvas-menu mt-4">
      {categoriesData.map((item,index) => (
        <li key={`categorycanvasbodytitle${index}`}>
          <Link to="">{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

function cartOffCanvasBody() {
  return <p>Your Cart Items is Currently Empty</p>;
}

export const HomeNavLinks = [
  {
    title: "Home",
    route: "",
  },
  {
    title: "About",
    route: "",
  },
  {
    title: "Shop",
    route: "",
  },
  {
    title: "Pages",
    route: "",
  },
  {
    title: "Blog",
    route: "",
  },
  {
    title: "Contact",
    route: "",
  },
];
