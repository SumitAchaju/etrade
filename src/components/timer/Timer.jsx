import React from "react";

export default function Timer({ spanStyle, spanContent, iconStyle }) {
  return (
    <>
      <span style={spanStyle} className="rounded-circle">
        {spanContent}
      </span>
      <i style={iconStyle} className="bi bi-three-dots-vertical"></i>
      <span style={spanStyle} className="rounded-circle">
        {spanContent}
      </span>
      <i style={iconStyle} className="bi bi-three-dots-vertical"></i>
      <span style={spanStyle} className="rounded-circle">
        {spanContent}
      </span>
      <i style={iconStyle} className="bi bi-three-dots-vertical"></i>
      <span style={spanStyle} className="rounded-circle">
        {spanContent}
      </span>
    </>
  );
}
