import React from "react";
import HeaderTop from "../../components/header/HeaderTop";
import Navigation from "../../components/header/Navigation";
import HomeBanner from "./banner/HomeBanner";
import FlashSales from "./homesales/FlashSales";
import BrowseByCategory from "./homesales/BrowseByCategory";
import BestSellingProduct from "./homesales/BestSellingProduct";
import HomeOffer, { homeOfferData } from "./homeoffer/HomeOffer";
import ExploreProduct from "./homesales/ExploreProduct";
import HomeFeedBack from "./feedback/HomeFeedBack";
import NewArrival from "./homesales/NewArrival";
import HomeNewsLetter, { newsLetterData } from "./feedback/HomeNewsLetter";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
      <HeaderTop />
      <Navigation />
      <HomeBanner />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProduct/>
      <HomeOffer {...homeOfferData}/>
      <ExploreProduct />
      <HomeFeedBack />
      <NewArrival/>
      <HomeNewsLetter {...newsLetterData} />
      <Footer/>
    </>
  );
}
