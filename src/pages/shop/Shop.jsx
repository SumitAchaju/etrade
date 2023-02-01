import React, { useMemo, useState } from "react";
import ProductList from "../../components/productlist/ProductList";
import ProductData from "../../assests/ProductData";
import BreadCrumbs from "../../components/breadcums/BreadCrumbs";
import { categoriesData } from "../../components/header/Navigation";
import { motion } from "framer-motion";

export default function Shop() {
  const product = useMemo(() => shuffle([...ProductData]), []);
  const [level, setLevel] = useState(8);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  function loadMore() {
    setLevel((prev) => prev + 8);
  }
  return (
    <>
      <BreadCrumbs title="Explore Our Product" link={["Home", "Shop"]} />
      <div className="container">
        <SelectOptionSetup />
        <ProductList data={product.slice(0, level)} />
        <div className="text-center">
          {level < product.length ? (
            <motion.div
              style={{ display: "inline-block" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <button
                className="py-3 fw-bold px-4 mx-auto rounded d-inline-block"
                style={{
                  background: "#f7f7f7",
                  fontSize: "17px",
                  color: "gray",
                  border: "0",
                }}
                onClick={loadMore}
              >
                Load More
              </button>
            </motion.div>
          ) : null}
        </div>
      </div>
    </>
  );
}

function SelectOptionSetup() {
  return (
    <>
      <div className="row mb-3">
        <div className="col-lg-9">
          <div className="d-md-flex align-items-center gap-3">
            <SelectOption {...categoryOptionData} />
            <SelectOption {...colorOptionData} />
            <SelectOption {...priceOptionData} />
          </div>
        </div>
        <div className="col-lg-3 text-lg-end">
          <SelectOption {...sortOptionData} />
        </div>
      </div>
    </>
  );
}

function SelectOption(props) {
  return (
    <>
      <select
        style={{
          paddingRight: "43px",
          paddingLeft: "30px",
          margin: "10px",
          height: "55px",
          appearance: "none",
          color: "gray",
          border: "2px solid #CBD3D9",
          outline: "none",
          cursor: "pointer",
          background:
            "url(https://new.axilthemes.com/demo/template/etrade/assets/images/icons/arrow-icon2.png) 85% center no-repeat rgba(0,0,0,0)",
        }}
        className="rounded fw-bold"
        name={props.name}
        id={props.name}
      >
        {props.options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

const categoryOptionData = {
  name: "selectcategory",
  options: categoriesData.map((item) => item.title),
};

const colorOptionData = {
  name: "selectcolor",
  options: ["Color", "Red", "Orange", "Blue", "White"],
};
const priceOptionData = {
  name: "selectprice",
  options: ["Price", "1500-3000", "3000-5000", "5000-10000", "above 1000"],
};
const sortOptionData = {
  name: "selectsort",
  options: [
    "Sort by Latest",
    "Sort by Price",
    "Sort by Name",
    "Sort by Viewed",
  ],
};
