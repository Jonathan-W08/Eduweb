import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    account: {
      id: "",
      name: "",
      email: "",
      profile_img: "",
      status: "",
    },
  },
  reducers: {
    changeAccount(state, action) {
      state.account = action.payload;
    },
  },
});

export const accountActions = accountSlice.actions;
export default accountSlice;
