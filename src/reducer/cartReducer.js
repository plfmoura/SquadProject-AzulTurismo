import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
     //Adicionar al Cart
     addToCart: (state, action) => {
      let newItem=action.payload;
      state.cart = [...state.cart, { ...newItem}];
     localStorage.setItem("cartlocal", JSON.stringify(state.cart));
    },
    //Vaciar Cart
    delCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cartlocal");
    },
    //Actualizar Cart
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCart,delCart,addToCart} = cartSlice.actions;

export default cartSlice.reducer;
