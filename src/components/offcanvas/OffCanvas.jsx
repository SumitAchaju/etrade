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
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          {props.offCanvasBody ? <props.offCanvasBody /> : null}
        </div>
      </div>
    </>
  );
}
