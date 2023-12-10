import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./account-slice";
import webinarsSlice from "./webinar-slice";

const store = configureStore({
  reducer: { account: accountSlice.reducer, webinars: webinarsSlice.reducer },
});

export default store;
