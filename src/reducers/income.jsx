import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const income = createSlice({
    name: "income",
    initialState: {
      incomeData: [
        { id: 1, category: "Salary", amount: 25000, note:'' },
        { id: 2, category: "Bonus", amount: 2000, note:'' },
      ],
    },
    reducers: {
        addIncome: (state, action) => {
          const { category, amount, note } = action.payload;
          const newIncome = {
            id: uuidv4(),
            category: category,
            amount: amount,
            note: note,
          };
          state.incomeData = [newIncome, ...state.incomeData];
        },

        editIncome: (state, action) => {
            const { id, category, amount, note } = action.payload;
            // Use map to create a new array with the updated income item
            state.incomeData = state.incomeData.map((item) =>
              item.id === id ? { ...item, category, amount, note } : item
            );
          },
          deleteIncome: (state, action) =>{
            state.incomeData.splice(action.payload, 1);
          }
        
        }


})
