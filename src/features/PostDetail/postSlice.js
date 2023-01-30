import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: [],
};

const postSlice = createSlice({
  name: "postDetail",
  initialState,
  reducers: {
    inputPost: (state, { payload }) => {
      state.detail = [payload.postInput, ...state.detail];
      localStorage.setItem(
        "post",
        JSON.stringify(state.detail.map((item) => item))
      );
      // const data = payload.inputVal;
      // console.log(data);
      // state.detail = [...state.detail, data];
      // console.log(state.detail);
    },
    localPost: (state, { payload }) => {
      state.detail = payload.data == null ? [] : [...payload.data];
      // state.detail = [payload.postInput]
    },
    deletePost: (state, { payload }) => {
      state.detail = state.detail.filter((item) => {
        return (
          item.title !== payload.val.title &&
          item.paragraph !== payload.val.paragraph
        );
      });
      localStorage.setItem(
        "post",
        JSON.stringify(state.detail.map((item) => item))
      );
    },
  },
});

export const { inputPost, localPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
