import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Define RootState type from the store itself
export type RootState = ReturnType<typeof store.getState>;
export default store;
