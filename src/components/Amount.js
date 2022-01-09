import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { COLORS } from "../styles";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.lightGrayBlue};
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1.2rem;
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;
  color: ${COLORS.orange};
  font-weight: 700;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const Amount = () => {
  const amount = useSelector((state) => state.amount.amount);
  const dispatch = useDispatch();
  return (
    <Container>
      <Btn onClick={() => dispatch({ type: "MINUS" })}>-</Btn>
      {amount}
      <Btn onClick={() => dispatch({ type: "PLUS" })}>+</Btn>
    </Container>
  );
};

export default Amount;
