import React from "react";
import { Link } from "react-router-dom";
import "./scss/Navigation.style.scss";
import OffCanvas from "../offcanvas/OffCanvas";
import { SliderContent1 } from "../slider/SliderContent";
import ProductContentTitle, {
  ProductContentPrice,
  ProductContentStar,
} from "../productlist/ProductContent";

export default function Navigation() {
  return (
    <>
      <nav className="navlink-home-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-md-5 col-xl-2 col-lg-3 col-sm-6">
              <button
                className="btn btn-primary gap-2 justify-content-start d-flex align-items-center py-3 rounded px-5 w-100"
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
                  <i className="bi bi-cart" value="3"></i>
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
        title="CART ITEMS"
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
        {HomeNavLinks.map((item, index) => (
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
      {categoriesData.map((item, index) => (
        <li key={`categorycanvasbodytitle${index}`}>
          <Link to="">{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

function cartOffCanvasBody() {
  return (
    <div className="cart">
      <div
        style={{ maxHeight: "460px", overflowY: "auto", overflowX: "hidden" }}
        className="cartitems py-4 border-top border-bottom"
      >
        {cartItems.map((item, index) => (
          <div key={index} className="cartitem py-3">
            <div className="row align-items-center">
              <div className="col-3 position-relative">
                <img
                  style={{ marginLeft: "2px" }}
                  width={"100%"}
                  src={item.productImg}
                  alt="productImg"
                />
                <div
                  style={{
                    background: "#f7f7f7",
                    position: "absolute",
                    left: "15px",
                    top: "-10px",
                  }}
                  className="hover-effect-circle"
                >
                  <i
                    style={{
                      fontSize: "18px",
                      fontWeight: "bolder",
                      cursor: "pointer",
                    }}
                    className="bi bi-x px-1 d-block rounded-circle"
                  ></i>
                </div>
              </div>
              <div className="col-5">
                <ProductContentStar {...item} fontSize="14px" />
                <ProductContentTitle
                  fontSize="14px"
                  {...item}
                  className="py-1"
                />
                <ProductContentPrice {...item} />
              </div>
              <div className="col-4">
                <div className="d-flex align-items-center gap-2">
                  <div
                    style={{ background: "#f7f7f7" }}
                    className="hover-effect-circle"
                  >
                    <i
                      style={{
                        fontSize: "18px",
                        fontWeight: "bolder",
                        cursor: "pointer",
                      }}
                      className="bi bi-dash px-2 py-1 d-block rounded-circle"
                    ></i>
                  </div>
                  <div>{item.amount}</div>
                  <div
                    style={{ background: "#f7f7f7" }}
                    className="hover-effect-circle"
                  >
                    <i
                      style={{
                        fontSize: "18px",
                        fontWeight: "bolder",
                        cursor: "pointer",
                      }}
                      className="bi bi-plus px-2 py-1 d-block rounded-circle"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cartsubtotal mt-3">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="fs-4">Subtotal:</h2>
          <h2 className="fs-4">$625.37</h2>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-4">
          <button style={{width:"100%"}} className="btn btn-primary py-3">View Cart</button>
          <button style={{background:"#ff4b7e",color:"white",width:"100%"}} className="btn py-3">Checkout</button>
        </div>
      </div>
    </div>
  );
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

const cartItems = [
  {
    productImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png",
    amount: 15,
    star: 4.5,
    reviewNo: 18,
    title: "Bass Meets Clarity",
    previousPrice: 40,
    newPrice: 33,
  },
  {
    productImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-02.png",
    amount: 5,
    star: 3,
    reviewNo: 5,
    title: "Best KeyBoard",
    previousPrice: 90,
    newPrice: 55,
  },
  {
    productImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-03.png",
    amount: 22,
    star: 5,
    reviewNo: 23,
    title: "HD CC Camera",
    newPrice: 200,
  },
  {
    productImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png",
    amount: 15,
    star: 4.5,
    reviewNo: 18,
    title: "Bass Meets Clarity",
    previousPrice: 40,
    newPrice: 33,
  },
  {
    productImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-02.png",
    amount: 5,
    star: 3,
    reviewNo: 5,
    title: "Best KeyBoard",
    previousPrice: 90,
    newPrice: 55,
  },
  {
    productImg:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-03.png",
    amount: 22,
    star: 5,
    reviewNo: 23,
    title: "HD CC Camera",
    newPrice: 200,
  },
];
