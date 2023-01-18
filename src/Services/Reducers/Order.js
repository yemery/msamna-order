import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  order: [],
};

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, userOrder) => {},
    editOrder: (state) => {},
    deleteOrder: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {} = OrderSlice.actions;

export default OrderSlice.reducer;
