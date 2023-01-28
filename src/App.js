import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./store/features/CartSlice";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems,dispatch]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
