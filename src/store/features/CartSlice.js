import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../../assests/ProductData";

const initialState = {
  cartItems: ProductData.slice(0, 3),
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, actions) => {
      const itemId = actions.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    addItem: (state, { payload }) => {
      const item = { ...ProductData.find((item) => item.id === payload.data) };
      if (payload.amount) {
        item.amount = payload.amount;
      }
      state.cartItems = [...state.cartItems, item];
    },
    toggleItemsAmount: (state, { payload }) => {
      if (payload.type === "increase") {
        const item = state.cartItems.find((item) => item.id === payload.id);
        item.amount = item.amount + 1;
      } else if (payload.type === "decrease") {
        const item = state.cartItems.find((item) => item.id === payload.id);
        item.amount = item.amount - 1;
      } else {
        throw new Error(`unhandled type of toggle ${payload.type}`);
      }
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.newPrice;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export default cartSlice.reducer;
export const {
  clearCart,
  removeItem,
  toggleItemsAmount,
  calculateTotal,
  addItem,
} = cartSlice.actions;
