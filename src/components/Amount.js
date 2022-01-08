import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled.button``;

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
