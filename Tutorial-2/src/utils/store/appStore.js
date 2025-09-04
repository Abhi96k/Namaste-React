import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slice/CartSlice.js";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // we can add more slices here
  },
});

export default appStore;

//store is a globalized state container
// store is hold multiple reducers means slices
// we can have multiple slices in a single store

// store ---> reducer/slice ---> state + actions + reducer function
// state - initial state
// actions - addItem, removeItem, clearCart
// reducer function - how to manipulate the state based on action
// we can have multiple slices in a single store
// we can have multiple stores in a single application but not recommended
// we should have only one store in a single application
