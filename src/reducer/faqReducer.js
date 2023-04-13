import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  faq: [],
  faqUser: [],
};

export const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    //Adicionar as faq
    setFaq: (state, action) => {
      state.faq = action.payload;
    },
    setFaqUser: (state, action) => {
      state.faqUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFaq, setFaqUser } = faqSlice.actions;

export default faqSlice.reducer;
