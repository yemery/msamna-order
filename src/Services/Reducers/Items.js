import { createSlice } from "@reduxjs/toolkit";
import {
  items,
  filterByElm,
  suppliments,
  ataySuppliments,
} from "../../Assets/Data/data";
const initialState = {
  items: items.sort(() => Math.random() - 0.5),
  filterItemsArr: [],
  categories: filterByElm,
  ataySupp: ataySuppliments,
  otherSupp: suppliments,
};
export const itemsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    filterItems: (state, action) => {
      // console.log(action.payload);
      if (action.payload !== "all") {
        state.filterItemsArr = state.items.filter(
          (e) => e.category == action.payload
        );
      } else {
        state.filterItemsArr = state.items;
      }
      // state.filterItemsArr = findById;

      // console.log(action.payload);
      // console.log(findById);
      // console.log(state.filterItemsArr);
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterItems } = itemsSlice.actions;

export default itemsSlice.reducer;
