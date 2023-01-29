import { configureStore } from "@reduxjs/toolkit";
import Items from "./Reducers/Items";
import Order from "./Reducers/Order";
export const store = configureStore({
  reducer: {
    Items: Items,
    Order: Order,
  },
});
