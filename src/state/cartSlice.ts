import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the product type
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: Product[];
  totalAmount: number;
  totalItems: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a product to the cart
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.items.find(item => item.id === action.payload.id);

      if (existingProduct) {
        // If the product already exists, increase its quantity
        existingProduct.quantity += action.payload.quantity;
      } else {
        // Otherwise, add the product to the cart
        state.items.push(action.payload);
      }

      // Recalculate total amount and total items
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    // Remove a product from the cart by its ID
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);

      // Recalculate total amount and total items after removal
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    // Clear the cart
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
