import React from 'react';
import { CardContainer, Content, Note } from '../styles/CardStyle';
import { FaRegEdit } from "react-icons/fa";

//Component shows each income log
const IncomeCard = ({ income, onEdit }) => {
  return (
    <>
    <CardContainer>
      <Content>{income.category}</Content>
      <Content>{income.amount}</Content>
      <FaRegEdit style={{color:'var(--primary)', alignItems:'center'}} onClick={() => onEdit(income)}>Edit</FaRegEdit>
    </CardContainer>
    <Note>{income.note}</Note>
    </>
  );
};

export default IncomeCard;
