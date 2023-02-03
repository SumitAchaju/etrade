import React from "react";
import BreadCrumbs from "../../components/breadcums/BreadCrumbs";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./scss/WishList.style.scss";
import { Link } from "react-router-dom";
import { removeWishList } from "../../store/features/WishListSlice";
import { addItem, removeItem } from "../../store/features/CartSlice";
import { cartToastAdd, cartToastRemove } from "../../components/toast/Toast";

export default function WishList() {
  const { wishListItem } = useSelector((store) => store.wishlist);
  const dispatch = useDispatch();
  return (
    <>
      <BreadCrumbs
        title="My WishList on eTrade!!"
        link={["Home", "Wishlist"]}
      />
      <div className="container wishlist">
        <div className="row wishlisthead">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 text-center text-lg-start">
            <h4>Products</h4>
          </div>
          <div className="col-lg-2 d-none d-lg-block">
            <h4>Unit Price</h4>
          </div>
          <div className="col-lg-2 d-none d-lg-block">
            <h4>Stock Status</h4>
          </div>
          <div className="col-lg-2"></div>
        </div>
        {wishListItem.length ? (
          wishListItem.map((item, index) => (
            <div
              key={index}
              className="row wishlistbody align-items-center my-3"
            >
              <div className="col-lg-1">
                <div
                  style={{ background: "#f7f7f7" }}
                  className="hover-effect-circle"
                  onClick={() => dispatch(removeWishList(item.id))}
                >
                  <i
                    style={{
                      fontSize: "18px",
                      fontWeight: "bolder",
                      cursor: "pointer",
                      color: "gray",
                    }}
                    className="bi bi-x px-2 py-1 d-block rounded-circle"
                  ></i>
                </div>
              </div>
              <div className="col-lg-5">
                <Link to={`/product/${item.id}`}>
                  <div className="d-flex align-items-center gap-4">
                    <img
                      className="d-block"
                      src={item.productImage}
                      alt="img"
                    />
                    <h4>{item.title}</h4>
                  </div>
                </Link>
              </div>
              <div className="col-lg-2">
                <h4>${item.newPrice}</h4>
              </div>
              <div className="col-lg-2">
                <h4>{item.inStock ? "In Stock" : "Out of Stock"}</h4>
              </div>
              <div className="col-lg-2">
                <AddToCartBtn {...item} />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center my-5 py-5">
            <h4>Your Wishlist is currently empty!!</h4>
          </div>
        )}
      </div>
    </>
  );
}

function AddToCartBtn(props) {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const isInCart = cartItems.find((item) => item.id === props.id)
    ? true
    : false;
  const addCartItem = () => {
    dispatch(addItem({ data: props.id }));
    cartToastAdd();
  };
  const removeCartItem = () => {
    dispatch(removeItem(props.id));
    cartToastRemove();
  };
  return (
    <motion.div
      style={{ display: "inline-block" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <button
        className="py-2 fw-bold px-3 mx-auto rounded d-inline-block"
        style={{
          background: isInCart ? "#139e38" : "#ff4b7e",
          fontSize: "15px",
          color: "white",
          border: "0",
        }}
        onClick={isInCart ? removeCartItem : addCartItem}
      >
        {isInCart ? "Remove Item" : "Add to Cart"}
      </button>
    </motion.div>
  );
}
