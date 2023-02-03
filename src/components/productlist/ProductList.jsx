import React from "react";
import SliderImage from "../slider/SliderImage";
import { SliderContent1, SliderContent2 } from "../slider/SliderContent";

export default function ProductList(props) {
  return (
    <>
      <div style={{cursor:"pointer"}} className="productlist">
        <div className="row">
          {props.data.map((item,index) => (
            <div key={index} className="product-list-item col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-5">
              <SliderImage {...item} />
              {item.view==="color" ? (
                <SliderContent2 {...item} />
              ) : (
                <SliderContent1 {...item} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
