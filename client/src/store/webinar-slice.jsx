import { createSlice } from "@reduxjs/toolkit";

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

export const webinarsActions = webinarsSlice.actions;
export default webinarsSlice;
