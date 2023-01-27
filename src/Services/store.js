import { configureStore } from "@reduxjs/toolkit";
import Items from "./Reducers/Items";
import Order from "./Reducers/Order";
import Counters from "./Reducers/Counters";
export const store = configureStore({
  reducer: {
    Items: Items,
    Order: Order,
    Counter: Counters,
  },
});
