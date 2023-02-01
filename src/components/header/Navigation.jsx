import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./scss/Navigation.style.scss";
import OffCanvas, {
  CategoryOffCanvasBody,
  MenuOffCanvasBody,
  CartOffCanvasBody,
} from "../offcanvas/OffCanvas";
import { useSelector } from "react-redux";

export default function Navigation() {
  const { amount } = useSelector((store) => store.cart);
  let classList = ["navlink-home-container"];
  const [scrolled, setScrolled] = useState(false);


  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  if (scrolled) {
    classList.push("scrolled");
    classList.push("displayNone");
  }
  
  return (
    <>
      <nav className={classList.join(" ")}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-md-5 col-xl-2 col-lg-3 col-sm-6">
              {scrolled ? (
                <Link to="/">
                  <img
                    src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png"
                    alt="img"
                  />
                </Link>
              ) : (
                <button
                  className="btn btn-primary gap-2 justify-content-start d-flex align-items-center py-3 rounded px-5 w-100"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#startcategory"
                  aria-controls="startcategory"
                >
                  <i className="bi bi-list"></i>
                  <div>Categories</div>
                </button>
              )}
            </div>
            <div className="col-lg-8 d-md-none d-lg-block d-none">
              <div className="d-flex align-items-center gap-5 ms-5 navlinks-home">
                {HomeNavLinks.map((item, index) => (
                  <Link key={`navlinkhome${index}`} to={item.route}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-xl-2 col-lg-1 col-md-7 col-6 home-navbar-icons">
              <div className="d-flex gap-1 align-items-center justify-content-end">
                <Link to=" " className="hover-effect-circle">
                  <i className="bi bi-heart"></i>
                </Link>
                <Link
                  className="hover-effect-circle"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#endcart"
                  aria-controls="endcart"
                  to=""
                >
                  <i className="bi bi-cart" value={amount}></i>
                </Link>
                <Link className="hover-effect-circle" to=" ">
                  <i className="bi bi-person"></i>
                </Link>
                <Link
                  data-bs-toggle="offcanvas"
                  data-bs-target="#endmenu"
                  aria-controls="endmenu"
                  className="d-lg-none d-xl-none hover-effect-circle"
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
        offCanvasBody={MenuOffCanvasBody}
        canvasId="endmenu"
        align="end"
        title="Menu"
      />
      <OffCanvas
        width="250px"
        offCanvasBody={CategoryOffCanvasBody}
        canvasId="startcategory"
        align="start"
        title="Categories"
      />
      <OffCanvas
        offCanvasBody={CartOffCanvasBody}
        canvasId="endcart"
        align="end"
        title="CART ITEMS"
      />
    </>
  );
}

export const HomeNavLinks = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "",
  },
  {
    title: "Shop",
    route: "/shop",
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

const imglink =
  "https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories";

export const categoriesData = [
  {
    title: "Fashion",
    img: `${imglink}/cat-01.png`,
  },
  {
    title: "Electronics",
    img: `${imglink}/cat-02.png`,
  },
  {
    title: "Home Decor",
    img: `${imglink}/cat-03.png`,
  },
  {
    title: "Medicine",
    img: `${imglink}/cat-04.png`,
  },
  {
    title: "Furniture",
    img: `${imglink}/cat-05.png`,
  },
  {
    title: "Crafts",
    img: `${imglink}/cat-06.png`,
  },
  {
    title: "Accessories",
    img: `${imglink}/cat-07.png`,
  },
  {
    title: "Camera",
    img: `${imglink}/cat-08.png`,
  },
];
