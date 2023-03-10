import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Adicionar Usuario
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("azul_user", JSON.stringify(state.user));
    },
    delUser: (state) => {
      state.user = null;
      localStorage.removeItem("azul_user");
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, delUser } = userSlice.actions;

export default userSlice.reducer;
