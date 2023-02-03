import { SocialIcons } from "../productlist/ProductContent";
import "./scss/ProductDetail.style.scss";
import React,{useState} from "react";
import {
  ProductContentCounter,
  ProductContentPrice,
  ProductContentSelectColor,
  ProductContentStar,
} from "../productlist/ProductContent";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/features/CartSlice";
import { cartToastAdd, cartToastRemove } from "../toast/Toast";

export default function ProductDetail(props) {
  const { cartItems } = useSelector((store) => store.cart);
  const [itemAmount,setItemAmount] = useState(1);
  const dispatch = useDispatch();
  const isInCart = cartItems.find((item) => item.id === props.id)
    ? true
    : false;
  const addCartItem = () => {
    dispatch(addItem({ data: props.id, amount: itemAmount }));
    cartToastAdd();
  };
  const removeCartItem = () => {
    dispatch(removeItem(props.id));
    cartToastRemove();
  };
  return (
    <>
      <div className="row">
        <div
          className={`col-12 ${props.productShow ? "col-lg-5 col-md-6" : "col-md-6"}`}
        >
          <img className="w-100" src={props?.productImage} alt="img" />
        </div>
        <div
          className={`col-12 ${
            props.productShow ? "col-lg-7 col-md-6" : "col-md-6"
          } mt-3`}
        >
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
              <ProductContentCounter {...props} itemAmount={itemAmount} setItemAmount={setItemAmount} />
            </div>
            <div className="col-8 col-lg-9">
              <motion.div
                style={{ display: "inline-block" }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <button
                  style={{
                    background: isInCart ? "#139e38" : "#ff4b7e",
                    color: "white",
                  }}
                  onClick={isInCart ? removeCartItem : addCartItem}
                  className="btn px-3 py-2 fw-bold"
                >
                  {isInCart ? "Remove Item" : "Add to Cart"}
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
