import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
};

const politicSlice = createSlice({
  name: "politicNews",
  initialState,
  reducers: {
    newsCollection: (state, { payload }) => {
      state.news = [...payload.newsData, ...state.news];
      console.log(state.news);
    },
  },
});

export const { newsCollection } = politicSlice.actions;
export default politicSlice.reducer;
