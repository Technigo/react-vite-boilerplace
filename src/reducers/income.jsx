import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const income = createSlice({
    name: "income",
    initialState: {
      incomeData: [
        { id: 1,type: "income", category: "Salary", amount: 25000, note:'', createdAt: new Date() },
        { id: 2,type: "income", category: "Bonus", amount: 2000, note:'', createdAt: new Date() },
      ],
    },
    reducers: {
        addIncome: (state, action) => {
          const { type, category, amount, note } = action.payload;
          const newIncome = {
            id: uuidv4(),
            type: type,
            category: category,
            amount: amount,
            note: note,
            createdAt: moment(),
          };
          state.incomeData = [newIncome, ...state.incomeData];
        },

        editIncome: (state, action) => {
            const { id, type, category, amount, note } = action.payload;
            state.incomeData = state.incomeData.map((item) =>
              item.id === id ? { ...item, type, category, amount, note } : item
            );
          },
          deleteIncome: (state, action) =>{
            state.incomeData.splice(action.payload, 1);
          }
        
        }


})
