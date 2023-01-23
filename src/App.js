import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./store/features/CartSlice";

function App() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector(store=>store.cart)
  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
