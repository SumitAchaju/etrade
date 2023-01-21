import React, { useRef } from "react";
import SliderCategory from "../../../components/slider/SliderCategory";
import SliderTitle from "../../../components/slider/SliderTitle";
import Slider ,{breakpoints} from "../../../components/slider/Slider";
import { Navigation } from "swiper";
import SliderImage from "../../../components/slider/SliderImage";
import { SliderContent3 } from "../../../components/slider/SliderContent";

export default function NewArrival() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <>
      <section className="mt-5 pt-4">
        <div className="container">
          <div className="newarrivals">
            <SliderCategory
              icon="bi-basket"
              iconColor="white"
              title="This Week's"
              titleColor="#8C71DB"
            />

            <SliderTitle
              title="New Arrivals"
              styleClass="mb-4"
              navigationPrevRef={navigationPrevRef}
              navigationNextRef={navigationNextRef}
            />

            <Slider
              property={{
                modules: [Navigation],
                spaceBetween: 20,
                loop: true,
                speed: 800,
                pagination: { clickable: true },
                navigation: {
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                },
                onBeforeInit: (swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                },
                breakpoints: breakpoints,
              }}
              value={{
                SlideCard,
                slideData,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}


function SlideCard(props){
    return(
        <>
        <div className="newarrivals-slide">
            <div>
                <SliderImage {...props} imgStyle="rounded-circle"/>
            </div>
            <div>
              <SliderContent3 {...props} />
            </div>
        </div>
        </>
    )
}

const slideData =[
    {
      productImage:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-14.png",
      star: 4.5,
      reviewNo: 18,
      title: "Full A-Line Dress",
      previousPrice: 40,
      newPrice: 33,
      discount: 30,
      color: ["#9d55c9", "#de6262", "#dea550"],
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
        "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-4.png",
      star: 3,
      reviewNo: 20,
      title: "Guys Bomber Jacket",
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
      color: ["#9d55c9", "#de6262", "#dea550"],
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
      color: ["#9d55c9", "#de6262", "#dea550"],
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
  