import React from "react";
import { CardContainer, Note, Content } from "../styles/CardStyle";
import { FaRegEdit } from "react-icons/fa";
import moment from "moment";

//Component shows an expense log
const Expense = ({ expense, onEdit }) => {
  const formattedCreatedAt = moment(expense.createdAt).format("MMM DD");

  return (
    <>
      <CardContainer>
        <Content>{formattedCreatedAt}</Content>
        <Content>{expense.category}</Content>
        <Content>{expense.amount}</Content>
        <FaRegEdit
          style={{
            color: "var(--primary)",
            alignItems: "center",
            width: "10%",
          }}
          onClick={() => onEdit(expense)}
        >
          Edit
        </FaRegEdit>
      </CardContainer>
      <Note>{expense.note}</Note>
    </>
  );
};

export default Expense;
