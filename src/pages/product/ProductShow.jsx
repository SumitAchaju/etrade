import React from "react";
import BreadCrumbs from "../../components/breadcums/BreadCrumbs";
import { useParams } from "react-router-dom";
import ProductData from "../../assests/ProductData";
import ProductDetail from "../../components/productsingle/ProductDetail";
import { useSelector } from "react-redux";
import ProductInfo from "./ProductInfo";
import ProductRelated from "./ProductRelated";

export default function ProductShow() {
  const { id } = useParams();
  const { itemAmount } = useSelector((store) => store.productPreview);
  const productData = ProductData[id - 1];
  return (
    <>
      <BreadCrumbs
        title={productData.title}
        link={["Home", "Shop", `${productData.title}`]}
      />
      <div className="container">
        <div className="mb-5 pb-4">
          <ProductDetail
            {...productData}
            productShow={true}
            itemAmount={itemAmount}
          />
        </div>
        <div>
          <ProductInfo {...productData} />
        </div>
        <div className="pt-4">
          <ProductRelated />
        </div>
      </div>
    </>
  );
}
