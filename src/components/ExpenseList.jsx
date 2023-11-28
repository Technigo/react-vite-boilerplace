import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseCard from './ExpenseCard';
import InputForm from "./InputForm";
import {expense} from '../reducers/expense';
import {ListContainer, H3} from '../styles/ListStyle';

const ExpenseList = () => {
  const dispatch = useDispatch()
  const allExpense = useSelector((store) =>store.expense.expenseData);
  const [editingExpense, setEditingExpense] = useState("");
  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  const handleCancelEdit = () => {
    setEditingExpense("");
  };
  return (
    <div>
      <H3>Expenses</H3>
    <ListContainer>
    <div>{allExpense.map((item)=> (
      <ExpenseCard expense={item} key={item.id} onEdit={handleEdit}/>
    ))}</div>
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
  )
}

export default ExpenseList