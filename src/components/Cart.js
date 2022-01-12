import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { COLORS } from "../styles";
import sneakerTumbl from "../images/image-product-1-thumbnail.jpg";

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
  align-items: flex-start;
  justify-content: center;
  height: calc(100% - 4.5rem);
`;

const CartEmpty = styled.p`
  text-align: center;
  color: ${COLORS.gray};
  font-weight: 700;
`;

const CartFilled = styled.div``;
const ProductCartConatiner = styled.div`
  display: flex;
  margin: 1rem 0;
`;
const ProductCartDetails = styled.div`
  padding: 1rem 0;
  margin: 0;
 
  & > h4, & > p {  {
    margin: 0;
    color: ${COLORS.grayBlue};
  & > span {
    color: ${COLORS.black};
    font-weight: 700;
  }
`;
const ProductCartDetailsImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
`;

const ProductCartDetailsBtn = styled.button`
  width: 100%;
  background-color: ${COLORS.orange};
  color: ${COLORS.white};
  font-weight: bold;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.item);
  const amount = useSelector((state) => state.amount.amount);
  const dispatch = useDispatch();
  console.log("item", cartItems);
  return (
    <>
      {cart.active && (
        <CartContainer>
          <CartTitle>Cart</CartTitle>
          <CartContent>
            {!cartItems.name && <CartEmpty>Your cart is empty</CartEmpty>}
            {cartItems.name && (
              <CartFilled>
                <ProductCartConatiner>
                  <ProductCartDetailsImg src={sneakerTumbl} alt="" />
                  <ProductCartDetails>
                    <h4>{cartItems.name}</h4>
                    <p>
                      ${cartItems.finalPrice} x {amount} {"  "}
                      <span>${(cartItems.finalPrice * amount).toFixed(2)}</span>
                    </p>
                  </ProductCartDetails>
                </ProductCartConatiner>
                <ProductCartDetailsBtn>Checkout</ProductCartDetailsBtn>
              </CartFilled>
            )}
          </CartContent>
        </CartContainer>
      )}
    </>
  );
};

export default Cart;
