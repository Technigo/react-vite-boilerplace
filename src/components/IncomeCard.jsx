import React from "react";
import { CardContainer, Content, Note } from "../styles/CardStyle";
import { FaRegEdit } from "react-icons/fa";
import moment from "moment";

// Component shows each income log
const IncomeCard = ({ income, onEdit }) => {
  const formattedCreatedAt = moment(income.createdAt).format("MMM DD");

  return (
    <>
      <CardContainer>
        <Content>{formattedCreatedAt}</Content>
        <Content>{income.category}</Content>
        <Content>{income.amount}</Content>
        <FaRegEdit
          style={{
            color: "var(--primary)",
            alignItems: "center",
            width: "10%",
          }}
          onClick={() => onEdit(income)}
        >
          Edit
        </FaRegEdit>
      </CardContainer>
      <Note>{income.note}</Note>
    </>
  );
};

export default IncomeCard;
