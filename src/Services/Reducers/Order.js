import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartOrders: [],
  orders: [],
};

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.cartOrders = [...state.cartOrders, action.payload];
    },
    editOrder: (state) => {},
    deleteOrder: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addOrder, editOrder, deleteOrder } = OrderSlice.actions;

export default OrderSlice.reducer;
