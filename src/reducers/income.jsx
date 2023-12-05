import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const income = createSlice({
    name: "income",
    initialState: {
      incomeData: [
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
            createdAt: moment().format("MMM DD"),
          };
          state.incomeData = [newIncome, ...state.incomeData];
        },

        editIncome: (state, action) => {
            const { id, type, category, amount, note } = action.payload;
            state.incomeData = state.incomeData.map((item) =>
              item.id === id ? { ...item, type, category, amount, note, createdAt: moment().format("MMM DD") } : item
            );
          },
          deleteIncome: (state, action) =>{
            state.incomeData.splice(action.payload, 1);
          }
        
        }


})
