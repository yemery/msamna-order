import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  supplimentsCounter: [],
};

export const OrderSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    Increment: (state, userOrder) => {},
    Decrement: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { Increment, Decrement } = OrderSlice.actions;

export default OrderSlice.reducer;
