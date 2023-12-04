import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpenseCard from "./ExpenseCard";
import InputForm from "./InputForm";
import { expense } from "../reducers/expense";
import { ListContainer, H3Expense , TextMessage} from "../styles/ListStyle";

const ExpenseList = ({ searchInput }) => {
  const dispatch = useDispatch();
  const allExpense = useSelector((store) => store.expense.expenseData);
  const [editingExpense, setEditingExpense] = useState("");
  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  const handleCancelEdit = () => {
    setEditingExpense("");
  };

  const filteredExpense = allExpense.filter((item) =>
    item.category.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div>
      <H3Expense>Expenses</H3Expense>
      <ListContainer>
        {filteredExpense.length === 0 ? (
          
          <TextMessage>No matching results found.</TextMessage>
        ) : (
          <div>
            {filteredExpense.map((item) => (
              <ExpenseCard expense={item} key={item.id} onEdit={handleEdit} />
            ))}
          </div>
        )}
        {editingExpense && (
          <InputForm
            onSave={(editedTransaction) => {
              // Dispatch the editIncome action with the edited transaction
              // Update the local state to stop editing
              dispatch(expense.actions.editExpense(editedTransaction));
              handleCancelEdit();
            }}
            onCancel={handleCancelEdit}
            // Pass the initial data for editing
            initialData={editingExpense}
          />
        )}
      </ListContainer>
    </div>
  );
};

export default ExpenseList;
