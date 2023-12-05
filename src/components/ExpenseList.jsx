import React from "react";
import { useSelector } from "react-redux";
import ExpenseCard from "./ExpenseCard";
import { expense } from "../reducers/expense";
import { ListContainer, H3Expense, TextMessage } from "../styles/ListStyle";

//Component shows the list of expenses
const ExpenseList = ({ searchInput }) => {
  const allExpense = useSelector((store) => store.expense.expenseData);
  const filteredExpense = allExpense.filter((item) =>
    item.category.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <H3Expense>Expenses</H3Expense>
      <ListContainer>
        {filteredExpense.length === 0 ? (
          <TextMessage>No data available.</TextMessage>
        ) : (
          <div>
            {filteredExpense.map((item) => (
              <ExpenseCard expense={item} key={item.id} />
            ))}
          </div>
        )}
      </ListContainer>
    </div>
  );
};

export default ExpenseList;
