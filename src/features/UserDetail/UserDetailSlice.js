import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetail: [],
};

const UserDetailSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    addUserDetails: (state, { payload }) => {
      state.userDetail = [...state.userDetail, payload.userData];
      localStorage.setItem(
        "userDetail",
        JSON.stringify(state.userDetail.map((item) => item))
      );
    },
  },
});

export const { addUserDetails } = UserDetailSlice.actions;

export default UserDetailSlice.reducer;
