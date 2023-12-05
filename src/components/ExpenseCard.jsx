import React from "react";
import { CardContainer, Note, Content, CreateDate, EditIcon } from "../styles/CardStyle";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

//Component shows an expense log
const Expense = ({ expense }) => {
  return (
    <>
      <CardContainer>
        <CreateDate>{expense.createdAt}</CreateDate>
        <Content>{expense.category}</Content>
        <Content>{expense.amount}</Content>
        <EditIcon>
        <Link to={`/editexpense/${expense.id}`} style={{ color: 'var(--primary)' }}><FaRegEdit/></Link></EditIcon>
      </CardContainer>
      <Note>{expense.note}</Note>
    </>
  );
};

export default Expense;
