import { configureStore } from "@reduxjs/toolkit";
import comprasReducer from "../reducer/comprasReducer";
import shoopingReducer from "../reducer/shoopingReducer";
import userReducer from "../reducer/userReducer";

export const store = configureStore({
  reducer: {
    shopping: shoopingReducer,
    user: userReducer,
    compras: comprasReducer,
  },
});
