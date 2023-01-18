import { configureStore } from "@reduxjs/toolkit";
import Items from "./Reducers/Items";
export const store = configureStore({
  reducer: {
    Items: Items,
  },
});
