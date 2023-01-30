import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  signUp: false,
  loggedInUser: "",
};

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    loggedInActive: (state, { payload }) => {
      state.loggedInUser = payload.userData;
    },
  },
});

export const { logIn, logOut, loggedInActive } = loggedInSlice.actions;

export default loggedInSlice.reducer;
