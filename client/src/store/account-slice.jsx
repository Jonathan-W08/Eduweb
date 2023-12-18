import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAccount = async () => {
  try {
    const response = await axios.get("http://localhost:5000/login/check");
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const accountSlice = createSlice({
  name: "account",
  initialState: {
    account: {
      id: "",
      name: "",
      email: "",
      profile_img: "",
      webinars_save: [],
      status: "",
    },
  },
  reducers: {
    changeAccount(state, action) {
      state.account = action.payload;
    },
  },
});

export const { changeAccount } = accountSlice.actions;
export default accountSlice;
