import React from "react";

export default function OffCanvas(props) {
  const alignMent = props.align ? props.align : "end";
  const canvasId = props.canvasId;
  const width = props.width?props.width:""
  return (
    <>
      <div
        className={`offcanvas offcanvas-${alignMent}`}
        tabIndex={-1}
        id={canvasId}
        aria-labelledby={`${canvasId}Label`}
        style={{width:width}}
      >
        <div className="offcanvas-header">
          {props.title ? (
            <h5 className="offcanvas-title" id={`${canvasId}Label`}>
              {props.title}
            </h5>
          ) : null}
          <div
          style={{background:"#f7f7f7"}}
            className="hover-effect-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
          <i style={{fontSize:"18px",fontWeight:"bolder",cursor:"pointer"}} className="bi bi-x px-2 py-1 d-block rounded-circle"></i>
          </div>
        </div>
        <div className="offcanvas-body">
          {props.offCanvasBody ? <props.offCanvasBody /> : null}
        </div>
      </div>
    </>
  );
}
