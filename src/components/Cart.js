import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

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
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  return (
    <>
      {cart.active && (
        <CartContainer>
          <CartTitle>Cart</CartTitle>
          <CartEmpty>Your cart is empty</CartEmpty>
        </CartContainer>
      )}
    </>
  );
};

export default Cart;
