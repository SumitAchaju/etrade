import React from 'react';
import HomeBanner from '../components/home/hometop/HomeBanner';
import HomeNavigation from '../components/home/hometop/HomeNavigation';
import HomeHeaderTop from '../components/home/hometop/HomeHeaderTop'
import FlashSales from '../components/home/homemid/FlashSales';

export default function Home() {
  return (
    <>
    <HomeHeaderTop/>
    <HomeNavigation/>
    <HomeBanner/>
    <FlashSales />
    </>
  )
}
