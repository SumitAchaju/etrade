import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../../assests/ProductData";

const initialState = {
  wishListItem: shuffle([...ProductData]).slice(5, 8),
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishList: (state, { payload }) => {
      const item = ProductData.find((item) => item.id === payload);
      state.wishListItem = [...state.wishListItem, item];
    },
    removeWishList: (state, { payload }) => {
      state.wishListItem = state.wishListItem.filter(
        (item) => item.id !== payload
      );
    },
  },
});

export default wishListSlice.reducer;

export const { addWishList, removeWishList } = wishListSlice.actions;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}