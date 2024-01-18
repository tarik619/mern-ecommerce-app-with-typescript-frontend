import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartReducerIntialState } from "../../types/reducer.types";
import { CartItem } from "../../types/types";

const initialState: CartReducerIntialState = {
  loading: false,
  cartItems: [],
  subtotal: 0,
  shippingCharges: 0,
  tax: 0,
  total: 0,
  discount: 0,
  shippingInfo: {
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  },
};

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.loading = true;
      state.cartItems.push(action.payload);
      state.loading = false;
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.cartItems.filter((i) => i.productId !== action.payload);
      state.loading = false;
    },
  },
});

export const { addToCart, removeCartItem } = cartReducer.actions;