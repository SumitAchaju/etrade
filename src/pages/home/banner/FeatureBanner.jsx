import React from 'react';

import "./scss/Banner.style.scss";

export default function FeatureBanner() {
    const {img,title,price} = featurebannerdata
  return (
    <>
    <div style={{background:"#f7f7f7"}} className="w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="featurebannerbox text-center">
            <img src={img} alt="img" />
            <p>{title}</p>
            <h4>$ {price}</h4>
        </div>
    </div>
    </>
  )
}

const featurebannerdata = {
    img:"/images/bannerimage/banner4.png",
    title:"Stylish Leather Bag",
    price:"29.99"
}
