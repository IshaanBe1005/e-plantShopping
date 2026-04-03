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

    // UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const itemIndex = state.findIndex(i => i.id === id);

      if (itemIndex !== -1) {
        if (type === "increase") {
          state[itemIndex].quantity += 1;
        } 
        else if (type === "decrease") {
          state[itemIndex].quantity -= 1;

          // ✅ REMOVE ITEM IF QUANTITY = 0
          if (state[itemIndex].quantity <= 0) {
            state.splice(itemIndex, 1);
          }
        }
      }
    }

  }
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
