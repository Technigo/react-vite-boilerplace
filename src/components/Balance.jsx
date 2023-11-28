import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AddTransaction from "./AddTransaction";
import moment from 'moment';

import { IncomeStyle, ExpenseStyle, BalanceStyle, Date } from "../styles/BalanceStyle";
const date = moment().format('dddd, ll');

const Balance = () => {
  const incomeData = useSelector((store) => store.income.incomeData);
  const expenseData = useSelector((store) => store.expense.expenseData);

  //Calculate the sum of income and expense
  const totalIncome = incomeData.reduce((total, income) => total + income.amount,0);
  const totalExpense = expenseData.reduce((total, expense) => total + expense.amount,0);

  //Calculate the balance
  const balance = totalIncome - totalExpense;

  return (
    <>
    <Date>{date}</Date>
    <div className="balance-container">
      
    <div className="balance-top-haft">
      <div>
        <p style={{ margin: "0", padding: "0" }}>Income</p>
        <IncomeStyle> {totalIncome}</IncomeStyle>
      </div>
      <div>
        <p style={{ margin: "0", padding: "0" }}>Expense</p>
        <ExpenseStyle> {totalExpense}</ExpenseStyle>
      </div>
      <div>
        <p style={{ margin: "0", padding: "0" }}>Balance</p>
        <BalanceStyle> {balance}</BalanceStyle>
      </div>
    </div>
    <div className="add-container">
    <AddTransaction/>
    </div>
    </div>
    </>
  );
};

export default Balance;
