import { configureStore } from "@reduxjs/toolkit";
import productPreviewReducer from "./features/ProductPreviewSlice";
import cartReducer from "./features/CartSlice";
import wishListReducer from "./features/WishListSlice";

export const Store = configureStore({
  reducer: {
    productPreview: productPreviewReducer,
    cart: cartReducer,
    wishlist: wishListReducer,
  },
});
