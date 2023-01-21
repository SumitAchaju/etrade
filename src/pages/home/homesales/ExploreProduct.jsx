import React from "react";
import SliderCategory from "../../../components/slider/SliderCategory";
import ProductList from "../../../components/productlist/ProductList";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const productData = [
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png",
    star: 4.5,
    reviewNo: 18,
    title: "Bass Meets Clarity",
    previousPrice: 40,
    newPrice: 33,
    discount: 30,
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-15.png",
    star: 5,
    reviewNo: 31,
    title: "Nike Shoes",
    previousPrice: 80,
    newPrice: 100,
    color: ["#9d55c9", "#de6262", "#dea550"],
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/furniture/product-1.png",
    star: 3,
    reviewNo: 20,
    title: "Stylish Chair",
    newPrice: 55,
    color: ["#9d55c9", "#de6262", "#dea550"],
    discount: 50,
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/jewellery/product-3.png",
    star: 3.5,
    reviewNo: 53,
    title: "Diamond Bracelet",
    newPrice: 99,
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-10.png",
    star: 2.5,
    reviewNo: 25,
    title: "Smart Watch",
    previousPrice: 35,
    newPrice: 30,
    discount: 10,
    color: ["#9d55c9", "#de6262", "#dea550"],
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-16.png",
    star: 5,
    reviewNo: 101,
    title: "Womens Cosmetics",
    newPrice: 66,
    discount: 33,
    color: ["#9d55c9", "#de6262", "#dea550"],
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-07.png",
    star: 3.5,
    reviewNo: 5,
    title: "Denim White Ring",
    newPrice: 40,
    previousPrice: 60,
    discount: 20,
  },
  {
    productImage:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/furniture/product-15.png",
    star: 5,
    reviewNo: 24,
    title: "Royal Watch",
    newPrice: 96,
    discount: 100,
    color: ["#9d55c9", "#de6262", "#dea550"],
  },
];
