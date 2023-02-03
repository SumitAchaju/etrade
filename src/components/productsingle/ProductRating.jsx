import { useState } from "react";

export default function StarRating (props) {
    const {rating,setRating} = props
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              style={buttonStyle}
              className={index <= (hover || rating) ? "star-rating-on" : "star-rating-off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

const buttonStyle ={
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontSize:"20px",
    padding:"0 2px"
}