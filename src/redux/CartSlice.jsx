import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    
    // ADD ITEM
    addItem: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    // REMOVE ITEM
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },

    // UPDATE QUANTITY (increase/decrease)
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const item = state.find(i => i.id === id);

      if (item) {
        if (type === "increase") {
          item.quantity += 1;
        } else if (type === "decrease" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    }

  }
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
