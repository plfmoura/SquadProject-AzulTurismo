import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  compras: [],
};

export const comprasSlice = createSlice({
  name: "compras",
  initialState,
  reducers: {
    //Eliminar de compras
    delFromCompras: (state, action) => {
      axios
        .delete(
          `https://vegetanizando-api.onrender.com/compras/${action.payload}`
        )
        .then((respuesta) => {
          alert("A compra foi elminado exitosamente");
        })
        .catch(() => {
          return alert(
            `${error}: Ocurriu um error, a compra ñao foi eliminada corretamente`
          );
        });
      state.compras = state.compras.filter(
        (compra) => compra.id !== action.payload
      );
    },

    //Actualizar Compras
    actualizarCompras: (state, action) => {
      state.compras = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actualizarCompras, delFromCompras } = comprasSlice.actions;

export default comprasSlice.reducer;
