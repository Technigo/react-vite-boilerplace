import React from "react";
import { CardContainer, Content, Note, CreateDate, EditIcon } from "../styles/CardStyle";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

// Component shows each income log
const IncomeCard = ({ income }) => {

  return (
    <>
      <CardContainer>
        <CreateDate>{income.createdAt}</CreateDate>
        <Content>{income.category}</Content>
        <Content>{income.amount}</Content>
        <EditIcon>
       <Link to={`/editincome/${income.id}`} style={{ color: 'var(--primary)'}}><FaRegEdit/></Link></EditIcon>
      </CardContainer>
      <Note>{income.note}</Note>
    </>
  );
};

export default IncomeCard;
