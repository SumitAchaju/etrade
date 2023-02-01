import React from "react";
import HomeBanner from "./banner/HomeBanner";
import FlashSales from "./homesales/FlashSales";
import BrowseByCategory from "./homesales/BrowseByCategory";
import BestSellingProduct from "./homesales/BestSellingProduct";
import HomeOffer, { homeOfferData } from "./homeoffer/HomeOffer";
import ExploreProduct from "./homesales/ExploreProduct";
import HomeFeedBack from "./feedback/HomeFeedBack";
import NewArrival from "./homesales/NewArrival";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProduct />
      <HomeOffer {...homeOfferData} />
      <ExploreProduct />
      <HomeFeedBack />
      <NewArrival />
    </>
  );
}
