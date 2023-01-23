import React from "react";
import { useSelector } from "react-redux";
import "./scss/ProductPreview.style.scss";
import ProductDetail from "../productsingle/ProductDetail";

export default function ProductPreview() {
  const { productItem } = useSelector((store) => store.productPreview);
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-preview-item modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content position-relative">
            <div className="modal-body">
              <ProductDetail {...productItem}/>
            </div>
            <div
              className="modal-dismiss-cross position-absolute"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="bi bi-x d-block"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
