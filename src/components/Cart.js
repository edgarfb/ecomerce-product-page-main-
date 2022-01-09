import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  position: absolute;
  top: 81px;
  left: 0;
  height: 300px;
  width: calc(100% - 1rem);
  background-color: #f5f5f5;
  border-radius: 10px;
  margin: 0.5rem;
`;

const CartTitle = styled.h3`
  font-weight: bold;
`;

const CartEmpty = styled.p`
  text-align: center;
`;

const Cart = () => {
  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      <CartEmpty>Your cart is empty</CartEmpty>
    </CartContainer>
  );
};

export default Cart;