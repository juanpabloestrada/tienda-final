import { bazarSlice } from "./bazarSlice";

export const {
  addToCart,
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} = bazarSlice.actions;
