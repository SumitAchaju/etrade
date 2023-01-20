import React from "react";

export default function SliderCategory({iconColor,icon,titleColor,title}) {
  return (
    <>
      <div className="d-flex align-items-center gap-2 mb-2">
        <i
          style={{
            color: iconColor,
            background: titleColor,
            fontSize: "12px",
            padding: "5px 7px",
          }}
          className={`bi ${icon} rounded-circle`}
        ></i>
        <span
          style={{ color: titleColor, fontSize: "16px", fontWeight: "bold" }}
        >
          {title}
        </span>
      </div>
    </>
  );
}
