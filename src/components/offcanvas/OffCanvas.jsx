import React from "react";
import ProductContentTitle, {
  ProductContentCounter,
  ProductContentPrice,
  ProductContentStar,
} from "../productlist/ProductContent";
import { Link } from "react-router-dom";
import { HomeNavLinks, categoriesData } from "../header/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../../store/features/CartSlice";

export default function OffCanvas(props) {
  const alignMent = props.align ? props.align : "end";
  const canvasId = props.canvasId;
  const width = props.width ? props.width : "";
  return (
    <>
      <div
        className={`offcanvas offcanvas-${alignMent}`}
        tabIndex={-1}
        id={canvasId}
        aria-labelledby={`${canvasId}Label`}
        style={{ width: width }}
      >
        <div className="offcanvas-header">
          {props.title ? (
            <h5 className="offcanvas-title" id={`${canvasId}Label`}>
              {props.title}
            </h5>
          ) : null}
          <div
            style={{ background: "#f7f7f7" }}
            className="hover-effect-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i
              style={{
                fontSize: "18px",
                fontWeight: "bolder",
                cursor: "pointer",
              }}
              className="bi bi-x px-2 py-1 d-block rounded-circle"
            ></i>
          </div>
        </div>
        <div className="offcanvas-body">
          {props.offCanvasBody ? <props.offCanvasBody /> : null}
        </div>
      </div>
    </>
  );
}

export function MenuOffCanvasBody() {
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

export function CategoryOffCanvasBody() {
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

export function CartOffCanvasBody() {
  const { total, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <div
        style={{ height: "67vh", overflowY: "auto", overflowX: "hidden" }}
        className="cartitems py-4 border-top border-bottom"
      >
        {cartItems.length ? (
          cartItems.map((item, index) => (
            <div key={index} className="cartitem py-3">
              <div className="row align-items-center">
                <div className="col-3 position-relative">
                  <img
                    style={{ marginLeft: "2px" }}
                    width={"100%"}
                    src={item.productImage}
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
                    onClick={() => dispatch(removeItem(item.id))}
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
                  <ProductContentCounter {...item} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3 className="fw-bold text-center" style={{ color: "orange" }}>
              Your Cart is Currently Empty
            </h3>
          </div>
        )}
      </div>
      <div className="cartsubtotal mt-3">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="fs-4">Subtotal:</h2>
          <h2 className="fs-4">${total.toFixed(2)}</h2>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-4">
          <button
            style={{ width: "100%" }}
            className="btn btn-primary py-3 fw-bold"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <button
            style={{ background: "#ff4b7e", color: "white", width: "100%" }}
            className="btn py-3 fw-bold"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
