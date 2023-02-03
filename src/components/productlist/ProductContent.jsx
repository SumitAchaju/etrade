import React from "react";
import "./scss/ProductContent.style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  previewItem,
} from "../../store/features/ProductPreviewSlice";
import { toggleItemsAmount, addItem, removeItem } from "../../store/features/CartSlice";
import { cartToastAdd, cartToastRemove } from "../toast/Toast";
import { Link } from "react-router-dom";

export default function ProductContentTitle(props) {
  return (
    <>
    <Link to={`/product/${props.id}`}>
      <p
        className={`fw-bold ${props?.className}`}
        style={{
          fontSize: props.fontSize ? props.fontSize : "17px",
          color: "#757575",
        }}
      >
        {props.title}
      </p>
      </Link>
    </>
  );
}

export function ProductContentPrice(props) {
  return (
    <>
      <div className={`price d-flex gap-2 ${props?.className}`}>
        <span
          style={{
            color: "#303030",
            fontSize: props.fontSize ? props.fontSize : "18px",
            fontWeight: "bold",
          }}
        >
          ${props.newPrice}
        </span>
        {props.previousPrice ? (
          <span
            style={{
              color: "#c2c2c2",
              textDecoration: "line-through #c2c2c2",
              fontSize: props.fontSize ? props.fontSize : "18px",
              fontWeight: "bold",
            }}
          >
            ${props.previousPrice}
          </span>
        ) : null}
      </div>
    </>
  );
}

export function ProductContentStar(props) {
  const { star } = props;
  const fullStar = Array.from({ length: star }).map((_, i) => i + 1);
  const emptyStar = Array.from({ length: 5 - star }).map((_, i) => i + 1);
  const halfStar = star % 1 !== 0 ? 1 : 0;
  return (
    <>
      <div className={`staricons d-flex gap-1 ${props?.className}`}>
        <div>
          {fullStar.map((num) => (
            <i
              key={num}
              style={{ color: "#FFDC60", fontSize: props?.fontSize }}
              className="bi bi-star-fill"
            ></i>
          ))}
          {halfStar ? (
            <i
              style={{ color: "#FFDC60", fontSize: props?.fontSize }}
              className="bi bi-star-half"
            ></i>
          ) : null}
          {emptyStar.map((num) => (
            <i
              key={num}
              style={{ color: "#FFDC60", fontSize: props?.fontSize }}
              className="bi bi-star"
            ></i>
          ))}
        </div>
        {
          props.reviewNo?
          <span
          style={{ color: "gray", fontSize: "14px" }}
        >{`(${props.reviewNo})`}</span>:null
        }
      </div>
    </>
  );
}

export function ProductContentSelectColor(props) {
  return (
    <>
      <div
        className={`d-flex align-items-center gap-3 ps-2 select-color ${props?.className}`}
      >
        {props.color.map((item, index) => (
          <span
            key={index}
            style={{ "--color-option-select": item, background: item }}
            className={`${
              index === 0 ? "selected" : ""
            } rounded-circle color d-block`}
          ></span>
        ))}
      </div>
    </>
  );
}

export function ProductContentAddCart(props) {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const isInCart = cartItems.find((item) => item.id === props.id)
    ? true
    : false;
  const addCartItem = ()=>{dispatch(addItem({data:props.id}));
  cartToastAdd();
}
  const removeCartItem = ()=>{dispatch(removeItem(props.id));
  cartToastRemove();
  }
  return (
    <>
      <div
        className={`product-add-cart gap-2 d-flex align-items-center ${props?.className}`}
      >
        <i className="bi bi-heart rounded"></i>
        <button
          style={{ background: isInCart ? "#139e38" : null }}
          className="btn"
          onClick={isInCart?removeCartItem:addCartItem}
        >
          {isInCart ? "Remove Item" : "Add to Cart"}
        </button>
        <i
          onClick={() => dispatch(previewItem(props.id))}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="bi bi-eye rounded"
        ></i>
      </div>
    </>
  );
}

export function ProductContentCounter(props) {
  const dispatch = useDispatch();
  let {itemAmount,setItemAmount} = props;
  const { cartItems } = useSelector((store) => store.cart);

  const isInCart = cartItems.find((item) => item.id === props.id);
  const isInCartAmount = isInCart ? isInCart.amount : itemAmount;

  function decreaseAmount() {
    if (isInCartAmount <= 1) {
      return;
    }
    if (isInCart)
      dispatch(toggleItemsAmount({ id: isInCart.id, type: "decrease" }));
    else setItemAmount(prev=>prev-1)
  }
  function increaseAmount() {
    if (isInCartAmount >= 10) {
      return;
    }
    if (isInCart)
      dispatch(toggleItemsAmount({ id: isInCart.id, type: "increase" }));
    else setItemAmount(prev=>prev+1)

  }
  return (
    <>
      <div className="d-flex align-items-center gap-2">
        <div style={{ background: "#f7f7f7" }} className="hover-effect-circle">
          <i
            style={{
              fontSize: "18px",
              fontWeight: "bolder",
              cursor: "pointer",
            }}
            onClick={decreaseAmount}
            className="bi bi-dash px-2 py-1 d-block rounded-circle"
          ></i>
        </div>
        <div className="fw-bold">{isInCartAmount}</div>
        <div style={{ background: "#f7f7f7" }} className="hover-effect-circle">
          <i
            style={{
              fontSize: "18px",
              fontWeight: "bolder",
              cursor: "pointer",
            }}
            onClick={increaseAmount}
            className="bi bi-plus px-2 py-1 d-block rounded-circle"
          ></i>
        </div>
      </div>
    </>
  );
}

export function SocialIcons() {
  return (
    <>
      <div
        style={{ color: "gray" }}
        className="footerbottomicons justify-content-center justify-content-lg-start mb-1 d-flex align-items-center gap-1"
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
    </>
  );
}
