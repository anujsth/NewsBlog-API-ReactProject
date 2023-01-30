import { configureStore } from "@reduxjs/toolkit";
import inputBoxReducer from "./features/InputBox/inputSlice.js";
import inputPostReducer from "./features/PostDetail/postSlice.js";
import politicNewsReducer from "./features/PoliticsNews/politicSlice.js";
import loggedInReducer from "./features/LoggedIn/loggedInSlice.js";
import userDetailReducer from "./features/UserDetail/UserDetailSlice.js";

export const store = configureStore({
  reducer: {
    inputToggle: inputBoxReducer,
    inputPost: inputPostReducer,
    politicNews: politicNewsReducer,
    loggedIn: loggedInReducer,
    userDetails: userDetailReducer,
  },
});
