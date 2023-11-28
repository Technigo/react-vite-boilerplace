import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export const expense = createSlice({
    name: "expense",
    initialState: {
      expenseData: [
        { id: 1, category: "Food", amount: 499, note:'' },
        { id: 2, category: "Health", amount: 449, note:'gymcard' },
      ],
    },
    reducers: {
        addExpense: (state, action) => {
          const { category, amount, note } = action.payload;
          const newExpense = {
            id: uuidv4(),
            category: category,
            amount: amount,
            note: note,
          };
          state.expenseData = [newExpense, ...state.expenseData];
        }, 
        editExpense: (state, action) =>{
          const { id, category, amount, note } = action.payload;
            // Use map to create a new array with the updated income item
            state.expenseData = state.expenseData.map((item) =>
              item.id === id ? { ...item, category, amount, note } : item
            );
        },
        deleteExpense: (state, action) =>{
          state.expenseData.splice(action.payload, 1);
        }
      }
})