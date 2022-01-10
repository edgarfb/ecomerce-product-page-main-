import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { COLORS } from "../styles";

const CartContainer = styled.div`
  position: absolute;
  top: 81px;
  left: 0;
  height: 300px;
  width: calc(100% - 1rem);
  background-color: ${COLORS.white};
  border-radius: 10px;
  margin: 0.5rem;
  box-sizing: border-box;
`;

const CartTitle = styled.h3`
  font-weight: bold;
  margin: 0;
  padding: 1.5rem;
  border-bottom: 1px solid ${COLORS.lightGrayBlue};
`;
const CartContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 4.5rem);
`;

const CartEmpty = styled.p`
  text-align: center;
  color: ${COLORS.gray};
  font-weight: 700;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      {cart.active && (
        <CartContainer>
          <CartTitle>Cart</CartTitle>
          <CartContent>
            <CartEmpty>Your cart is empty</CartEmpty>
          </CartContent>
        </CartContainer>
      )}
    </>
  );
};

export default Cart;
