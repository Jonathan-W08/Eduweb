import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWebinars = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/");
    const data = response.data;
    dispatch(changeWebinars(data));
  } catch (err) {
    console.log(err.message);
  }
};

const webinarsSlice = createSlice({
  name: "webinars",
  initialState: {
    webinars: [],
  },
  reducers: {
    changeWebinars(state, action) {
      state.webinars = action.payload;
    },
  },
});

export const { changeWebinars } = webinarsSlice.actions;
export default webinarsSlice;
