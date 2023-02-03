import React, { useState } from "react";
import { ProductContentStar } from "../productlist/ProductContent";
import "./scss/ProductReview.style.scss";
import StarRating from "./ProductRating";
import { productReviewCommentTost } from "../toast/Toast";

export default function ProductReview() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState([defaultReview]);

  function sumbitComment(e) {
    e.preventDefault();
    const newComment = {
      name: e.target.name.value,
      rating: rating,
      comment: e.target.message.value,
    };
    setComment((prev) => [...prev, newComment]);
    productReviewCommentTost();
  }
  
  return (
    <>
      <div className="row product-review">
        <div className="col-12 col-lg-7 product-review-max-height">
          {comment.map((item, index) => (
            <div
              key={index}
              className={`d-flex align-items-start gap-3 ${
                (index === 0) | (index === comment.length - 1) ? "" : "my-5"
              } ${(comment.length === 2) & (index === 0) ? "mb-5" : ""}`}
            >
              <div className="review-avatar">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path>
                </svg>
              </div>
              <div>
                <h4>{item.name}</h4>
                <ProductContentStar star={item.rating} fontSize={"14px"} />
                <p>{item.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 col-lg-5 mt-lg-0 mt-5">
          <h2>Add Your Review</h2>
          <div className="d-flex align-items-center gap-2">
            <span>Your Rating:</span>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <form onSubmit={sumbitComment} className="mt-3">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              cols="50"
              rows="3"
              required
            ></textarea>
            <div className="my-3 d-flex gap-4">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <button type="sumbit" className="btn btn-success">
              Sumbit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const defaultReview = {
  name: "Sumit Achaju",
  rating: 2.5,
  comment:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nostrum sint ad explicabo accusamus nesciunt tempore quis laboredebitis dolores quibusdam.",
};
