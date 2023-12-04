import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IncomeCard from "./IncomeCard";
import InputForm from "./InputForm";
import { income } from '../reducers/income';

import { ListContainer, H3Income , TextMessage} from "../styles/ListStyle";

const IncomeList = ({searchInput}) => {
  const dispatch = useDispatch();
  const allIncome = useSelector((store) => store.income.incomeData);
  const [editingIncome, setEditingIncome] = useState("");

  const handleEdit = (income) => {
    setEditingIncome(income);
  };

  const handleCancelEdit = () => {
    setEditingIncome("");
  };

  const filteredIncome = allIncome.filter(item =>
    item.category.toLowerCase().includes(searchInput.toLowerCase())
  );


  return (
    <div>
     
      <H3Income>Incomes</H3Income>
      <ListContainer>
      {filteredIncome.length === 0 ? (
          <TextMessage>No matching results found.</TextMessage>
        ) : (
        <div>
          {filteredIncome.map((item) => (
            <IncomeCard income={item} onEdit={handleEdit} key={item.id} />
          ))}
        </div>)}
        {editingIncome && (
          <InputForm
            onSave={(editedTransaction) => {
              dispatch(income.actions.editIncome(editedTransaction));
              handleCancelEdit();
            }}
            onCancel={handleCancelEdit}
            initialData={editingIncome}
          />
        )}
      </ListContainer>
    </div>
  );
};

export default IncomeList;
