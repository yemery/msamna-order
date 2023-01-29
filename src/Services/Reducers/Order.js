import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartOrders: [],
  orders: [],
  total: 0,
};

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.cartOrders = [...state.cartOrders, action.payload];
    },
    deleteOrder: (state, action) => {
      const filterCartOrders = state.cartOrders.filter(
        (e) => e.id != action.payload
      );
      state.cartOrders = filterCartOrders;
    },
    editOrder: (state, action) => {},
    orderTotal: (state) => {
      state.total = 0;
      state.cartOrders.map((e) => {
        if (e.cat == "msemen") {
          state.total +=
            (Object.entries(e.supps)
              .filter(([key, value]) => value != 0)
              .map(([key, value]) => value)
              .reduce((acc, val) => acc + val, 0) +
              e.price) *
            e.Qts;
        } else if (e.cat == "atay") {
          state.total += e.price * e.Qts;
        } else {
          state.total +=
            (Object.entries(e.supps)
              .filter(([key, value]) => value != 0)
              .map(([key, value]) => value)
              .reduce((acc, val) => acc + val, 0) +
              e.price * e.itemQts) *
            e.Qts;
        }
      });
    },
    setLocalStorage: (state) => {
      // const order=
      state.orders = [...state.orders, state.cartOrders, state.total];
      localStorage.setItem(
        `${state.orders.length}`,
        JSON.stringify(state.orders)
      );
      state.cartOrders = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addOrder, editOrder, deleteOrder, orderTotal, setLocalStorage } =
  OrderSlice.actions;

export default OrderSlice.reducer;
