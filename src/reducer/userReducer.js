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
      localStorage.setItem("admin", JSON.stringify(state.user));
    },
    delUser: (state) => {
      state.user = null;
      localStorage.removeItem("admin");
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, delUser } = userSlice.actions;

export default userSlice.reducer;
