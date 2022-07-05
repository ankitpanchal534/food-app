import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.name !== action.payload);
    },
    addQ(state, action) {
      state.map((item) => {
        if (item.name == action.payload.name) {
          item.quantity = item.quantity + 1;
        }
      });
    },
    removeQ(state, action) {
      state.map((item) => {
        if (item.name == action.payload.name && item.quantity > 1) {
          item.quantity = item.quantity - 1;
        }
      });
    },
  },
});
export const { add, addQ, removeQ, remove } = cartSlice.actions;
export default cartSlice.reducer;
