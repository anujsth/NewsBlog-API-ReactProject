import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleInput: false,
};

const inputSlice = createSlice({
  name: "inputToggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.toggleInput = !state.toggleInput ? true : false;
    },
  },
});

export const { toggle } = inputSlice.actions;

export default inputSlice.reducer;
