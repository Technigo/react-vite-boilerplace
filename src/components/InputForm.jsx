import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { income } from "../reducers/income";
import { expense } from "../reducers/expense";
import {
  InputContainer,
  Input,
  LabelInput,
  ButtonCancel,
  ButtonSave,
  Select,
  ButtonDelete,
} from "../styles/InputFormStyle";

const InputForm = ({ onSave, onCancel, initialData }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [isExpenseCategory, setIsExpenseCategory] = useState(true);

  const MAX_NOTE_LENGTH = 40;

  const handleNoteChange = (value) => {
    if (value.length > MAX_NOTE_LENGTH) {
      alert("Your note is too long 😞, the maximum length is 40 characters.");
      return;
    }
    setNote(value);
  };

  // Use useEffect to set initial values when in edit mode
  useEffect(() => {
    if (initialData) {
      setType(initialData.type);
      setCategory(initialData.category);
      setAmount(initialData.amount.toString());
      setNote(initialData.note);
    } else {
      // If there is no initialData, set default values or leave them empty
      setType("");
      setCategory("");
      setAmount("");
      setNote("");
    }
  }, [initialData]);

  const handleSave = () => {
    if (!amount || parseFloat(amount) <= 0 || !type || !category) {
      alert("Oops! Please make sure to enter a valid amount, select a transaction type, and choose a category.");
      return;
    }

    const transaction = {
      id: initialData ? initialData.id : undefined,
      category,
      amount: parseFloat(amount),
      note,
    };

    if (initialData) {
      if (type === "income") {
        dispatch(income.actions.editIncome(transaction));
      } else if (type === "expense") {
        dispatch(expense.actions.editExpense(transaction));
      }
    } else {
      if (type === "income") {
        dispatch(income.actions.addIncome(transaction));
      } else if (type === "expense") {
        dispatch(expense.actions.addExpense(transaction));
      }
    }

    // Clear the form
    setType("");
    setCategory("");
    setAmount("");
    setNote("");

    // Call the onSave callback
    onSave(transaction);
  };

  const handleTypeChange = (selectedType) => {
    setType(selectedType);
    setCategory(""); 
  };

  const handleDelete = () => {
    if (type === "expense") {
      dispatch(expense.actions.deleteExpense());
    } else if (type === "income") {
      dispatch(income.actions.deleteIncome());
    }
    onCancel();
  };

  return (
    <InputContainer>
      <div>
        <LabelInput>
          Type
          <Select
           value={initialData ? initialData.type : type}
           onChange={(e) => handleTypeChange(e.target.value)}
           disabled={initialData && (initialData.type === "income" || initialData.type === "expense")}
          >
            <option value="">
              Select type
            </option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Select>
        </LabelInput>
      </div>
      <div>
        <LabelInput>
          Category
          <Select
            value={initialData ? initialData.category : category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {initialData && (
              <option value={initialData.category}>
                {initialData.category}
              </option>
            )}
            {type ==="expense" ? (
              <>
                <option value="">Select category</option>
                <option value="Food">Food</option>
                <option value="Social Life">Social Life</option>
                <option value="Transport">Transport</option>
                <option value="Health">Health</option>
                <option value="Household">Household</option>
                <option value="Beauty">Beauty</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </>
            ) : type === "income" ?(
              <>
                <option value="">Select category</option>
                <option value="Salary">Salary</option>
                <option value="Bonus">Bonus</option>
                <option value="Allowance">Allowance</option>
                <option value="Other">Other</option>
              </>
            ): <option value=""> Select category</option>}
          </Select>
        </LabelInput>
      </div>
      <div>
        <LabelInput>
          Amount
          <Input
            type="number"
            placeholder=""
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </LabelInput>
      </div>
      <div>
        <LabelInput>
          {" "}
          Note
          <Input
            type="text"
            placeholder="Optional"
            value={note}
            onChange={(e) => handleNoteChange(e.target.value)}
          />
        </LabelInput>
        {note.length > MAX_NOTE_LENGTH && (
          <div style={{ color: "red" }}>Note cannot exceed 50 characters.</div>
        )}
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          {initialData && (
            <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
          )}
        </div>
        <div>
          <ButtonCancel onClick={onCancel}>Cancel</ButtonCancel>
          <ButtonSave onClick={handleSave}>Save</ButtonSave>
        </div>
      </div>
    </InputContainer>
  );
};

export default InputForm;
