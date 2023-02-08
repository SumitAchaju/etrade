import {
  Route,
    createBrowserRouter, createRoutesFromElements,
  } from "react-router-dom";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
import Shop from "./pages/shop/Shop";
import ProductShow from "./pages/product/ProductShow";
import WishList from "./pages/wishlist/WishList";
import CheckOut from "./pages/checkout/CheckOut";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main/>}>
      <Route index element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product/:id" element={<ProductShow/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
      <Route path="/checkout" element={<CheckOut/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Route>
  )
);