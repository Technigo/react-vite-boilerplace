import React from 'react';
import { CardContainer, Note, Content } from '../styles/CardStyle';
import { FaRegEdit } from "react-icons/fa";

//Component shows an expense log
const Expense = ({expense, onEdit}) => {
  return (
    <>
    <CardContainer>
        <Content>{expense.category}</Content>
        <Content>{expense.amount}</Content>
        <FaRegEdit style={{color:'var(--primary)'}} onClick={() => onEdit(expense)}>Edit</FaRegEdit>
    </CardContainer>
    <Note>{expense.note}</Note>
    </>
  )
}

export default Expense
