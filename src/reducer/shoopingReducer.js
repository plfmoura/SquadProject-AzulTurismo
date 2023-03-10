import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

export const shoppingSlice = createSlice({
  name: "shooping",
  initialState,
  reducers: {

    //Update Products
    updateProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateProducts,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;
