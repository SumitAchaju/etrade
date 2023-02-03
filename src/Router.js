import {
  Route,
    createBrowserRouter, createRoutesFromElements,
  } from "react-router-dom";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
import Shop from "./pages/shop/Shop";
import ProductShow from "./pages/product/ProductShow";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main/>}>
      <Route index element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product/:id" element={<ProductShow/>}/>
    </Route>
  )
);