import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IncomeCard from "./IncomeCard";
import InputForm from "./InputForm";
import { income } from '../reducers/income';


import { ListContainer, H3 } from "../styles/ListStyle";

const IncomeList = () => {
  const dispatch = useDispatch();
  const allIncome = useSelector((store) => store.income.incomeData);
  const [editingIncome, setEditingIncome] = useState("");

  const handleEdit = (income) => {
    setEditingIncome(income);
  };

  const handleCancelEdit = () => {
    setEditingIncome("");
  };

  return (
    <div>
      <H3>Incomes</H3>
      <ListContainer>
        <div>
          {allIncome.map((item) => (
            <IncomeCard income={item} onEdit={handleEdit} key={item.id} />
          ))}
        </div>
        {editingIncome && (
          <InputForm
            onSave={(editedTransaction) => {
              // Dispatch the editIncome action with the edited transaction
              // Also, update the local state to stop editing
              dispatch(income.actions.editIncome(editedTransaction));
              handleCancelEdit();
            }}
            onCancel={handleCancelEdit}
            initialData={editingIncome} // Pass the initial data for editing
          />
        )}
      </ListContainer>
    </div>
  );
};

export default IncomeList;
