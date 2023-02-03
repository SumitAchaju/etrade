import React from "react";
import ProductContentTitle, {
  ProductContentAddCart,
  ProductContentPrice,
  ProductContentSelectColor,
  ProductContentStar,
} from "../productlist/ProductContent";

export default function SliderContent(props) {
  return (
    <>
      <div className="productcontent">
        <div className="mt-4">
          <ProductContentTitle {...props} className="text-center" />
        </div>
        <div className="mt-2">
          <ProductContentPrice
            {...props}
            className="justify-content-center flex-row-reverse"
          />
        </div>
      </div>
    </>
  );
}

export function SliderContent1(props) {
  return (
    <>
      <div>
        <ProductContentStar {...props} className="mt-4" />
        <ProductContentTitle {...props} className="my-2" />
        <ProductContentPrice {...props} />
      </div>
    </>
  );
}

export function SliderContent2(props) {
  return (
    <>
      <div>
        <div className="mt-4">
          <ProductContentTitle {...props} />
        </div>
        <div className="my-2">
          <ProductContentPrice {...props} />
        </div>
        <div className="pt-1">
          <ProductContentSelectColor {...props} />
        </div>
      </div>
    </>
  );
}

export function SliderContent3(props) {
  return (
    <>
      <div className="mt-4">
        <ProductContentSelectColor
          className="justify-content-center"
          {...props}
        />
      </div>
      <div className="my-3">
        <ProductContentTitle className="text-center" {...props} />
      </div>
      <div className="my-3">
        <ProductContentPrice
          className="justify-content-center flex-row-reverse"
          {...props}
        />
      </div>
      <div className="my-3">
        <ProductContentAddCart {...props} className="justify-content-center" />
      </div>
    </>
  );
}
