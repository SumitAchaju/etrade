import React from "react";
import SliderCategory from "../../../components/slider/SliderCategory";
import ProductList from "../../../components/productlist/ProductList";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductData from "../../../assests/ProductData";

export default function ExploreProduct() {
  return (
    <>
      <section>
        <div className="container">
          <div>
            <SliderCategory
              iconColor="white"
              icon="bi-shop-window"
              titleColor="#8C71DB"
              title="Our Products"
            />
          </div>
          <div>
            <h2 className="fw-bold">Explore Our Products</h2>
          </div>
          <div className="mt-5">
            <ProductList data={productData} />
          </div>
          <div className="mt-2 text-center mb-5">
            <motion.div
              className="d-inline-block"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                to=""
                className="py-3 fw-bold px-4 mx-auto rounded d-inline-block"
                style={{
                  background: "#f7f7f7",
                  fontSize: "17px",
                  color: "gray",
                }}
              >
                View All Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

const productData = ProductData.slice(16,24)
