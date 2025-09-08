import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },
  },
});

export default cardSlice.reducer;
export const { addItem, removeItem, clearCart, updateQuantity } =
  cardSlice.actions;



  //RTK-either mutate the state directly or return a new state
  //RTK uses immer library under the hood to handle immutability
  //immer library allows us to write mutating logic in reducers
  //but it doesn't actually mutate the state
  //it creates a new state based on the mutations we made
  //and returns the new state
  //so we can write mutating logic in reducers without worrying about immutability
  //immer library is included in redux toolkit by default
  //we don't need to install it separately
  //we can use immer library directly if we want to
  //but it's not recommended as we are using redux toolkit
  //which already includes immer library 