import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const createdAt = moment().format("MMM DD");
export const expense = createSlice({
    name: "expense",
    initialState: {
      expenseData: [
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
            createdAt:  moment().format("MMM DD"),
          };
          state.expenseData = [newExpense, ...state.expenseData];
        }, 
        editExpense: (state, action) =>{
          const { id, type, category, amount, note} = action.payload;
            state.expenseData = state.expenseData.map((item) =>
              item.id === id ? { ...item, type, category, amount, note } : item
            );
        },
        deleteExpense: (state, action) =>{
          state.expenseData.splice(action.payload, 1);
        }
      }
})