import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export const expense = createSlice({
    name: "expense",
    initialState: {
      expenseData: [
        { id: 1, type:"expense", category: "Food", amount: 499, note:'' },
        { id: 2,type:"expense", category: "Health", amount: 449, note:'gymcard' },
      ],
    },
    reducers: {
        addExpense: (state, action) => {
          const { type, category, amount, note } = action.payload;
          const newExpense = {
            id: uuidv4(),
            type: type,
            category: category,
            amount: amount,
            note: note,
          };
          state.expenseData = [newExpense, ...state.expenseData];
        }, 
        editExpense: (state, action) =>{
          const { id, type, category, amount, note } = action.payload;
            state.expenseData = state.expenseData.map((item) =>
              item.id === id ? { ...item, type, category, amount, note } : item
            );
        },
        deleteExpense: (state, action) =>{
          state.expenseData.splice(action.payload, 1);
        }
      }
})