import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartOrders: [],
  orders: [],
  total: 0,
  getLocalStorage: [],
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
    editOrder: (state, action) => {
      const findOldObject = state.cartOrders.find(
        (e) => e.id == action.payload.id
      );
      if (action.payload.cat == "msemen") {
        if (findOldObject) {
          findOldObject.Qts = action.payload.Qts;
          findOldObject.supps = action.payload.supps;
        }
      } else if (action.payload.cat == "7archa") {
        if (findOldObject) {
          findOldObject.Qts = action.payload.Qts;
          findOldObject.itemQts = action.payload.itemQts;
          findOldObject.supps = action.payload.supps;
        }
      } else {
        if (findOldObject) {
          findOldObject.supps = action.payload.supps;
          findOldObject.Qts = action.payload.Qts;
        }
      }
    },
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
      state.orders = { order: state.cartOrders, total: state.total };
      localStorage.setItem(
        `${localStorage.length + 1}`,
        JSON.stringify(state.orders)
      );
      state.cartOrders = [];
    },
    getLocalStorage: (state) => {
      state.getLocalStorage = [];
      Object.entries(localStorage).map(([key, value]) => {
        state.getLocalStorage = [...state.getLocalStorage, JSON.parse(value)];
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addOrder,
  editOrder,
  deleteOrder,
  orderTotal,
  setLocalStorage,
  getLocalStorage,
} = OrderSlice.actions;

export default OrderSlice.reducer;
