import { configureStore } from "@reduxjs/toolkit";
import landownerSlice from "./slice/landownerSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
  reducer:{
    landowner: landownerSlice,
    userInfo: userSlice,
  }
})