import React from "react";

export default function Accordian({
  AccordianTitle,
  AccordianBody,
  id,
  accordianTitle,
}) {
  return (
    <>
      <div className="accordion" id={accordianTitle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${id}`}
              aria-expanded="true"
              aria-controls={id}
              style={{ background: "#F6F7FB", color: "gray" }}
            >
              <AccordianTitle />
            </button>
          </h2>
          <div
            id={id}
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent={`#${accordianTitle}`}
          >
            <div className="accordion-body" style={{ color: "gray" }}>
              <AccordianBody />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
