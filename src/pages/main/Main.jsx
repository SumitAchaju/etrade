import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import HeaderTop from "../../components/header/HeaderTop";
import Navigation from "../../components/header/Navigation";
import HomeNewsLetter, { newsLetterData } from "../home/feedback/HomeNewsLetter";
import Footer from "../../components/footer/Footer";
import ProductPreview from "../../components/productlist/ProductPreview";

export default function Main() {
  return (
    <>
      <HeaderTop />
      <Navigation />
      <Outlet />
      <HomeNewsLetter {...newsLetterData} />
      <Footer />
      <ProductPreview />
      <ScrollRestoration 
        getKey={(location) => {
          return location.pathname;
        }}
      />
    </>
  );
}
