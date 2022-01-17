import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { COLORS } from "../styles";
import sneakerTumbl from "../images/image-product-1-thumbnail.jpg";
import Svg from "./SvgIcon";

const CartContainer = styled.div`
  position: absolute;
  top: 81px;
  left: 0;
  height: 280px;
  width: calc(100% - 1rem);
  background-color: ${COLORS.white};
  border-radius: 10px;
  margin: 0.5rem;
  box-sizing: border-box;
  box-shadow: 0px 2px 25px 1px ${COLORS.grayBlue};
  z-index: 100;
  @media (min-width: 500px) {
    width: 375px;
    margin: 0;
    right: 0;
    left: auto;
    top: 99px;
  }
`;

const CartTitle = styled.h3`
  font-weight: bold;
  margin: 0;
  padding: 1.5rem;
  border-bottom: 1px solid ${COLORS.grayBlue};
`;
const CartContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: calc(100% - 4.5rem);
  padding: 0 1.5rem;
`;

const CartEmpty = styled.p`
  text-align: center;
  color: ${COLORS.gray};
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
    color: ${COLORS.gray};
  & > span {
    color: ${COLORS.black};
    font-weight: 700;
  }
`;
const ProductCartDetailsImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.25rem;
  margin-right: 1rem;
`;

const ProductCartRevome = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
`;

const ProductCartDetailsBtn = styled.button`
  width: 100%;
  background-color: ${COLORS.orange};
  color: ${COLORS.white};
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.item);
  const amount = cartItems.amount;
  const dispatch = useDispatch();
  console.log("item", cartItems);
  return (
    <>
      {cart.active && (
        <CartContainer>
          <CartTitle>Cart</CartTitle>
          <CartContent>
            {!cartItems.name && <CartEmpty>Your cart is empty.</CartEmpty>}
            {cartItems.name && (
              <CartFilled>
                <ProductCartConatiner>
                  <ProductCartDetailsImg
                    src={sneakerTumbl}
                    alt="sneakers tumbl"
                  />
                  <ProductCartDetails>
                    <h4>{cartItems.name}</h4>
                    <p>
                      ${cartItems.finalPrice} x {amount} {"  "}
                      <span>${(cartItems.finalPrice * amount).toFixed(2)}</span>
                    </p>
                  </ProductCartDetails>
                  <ProductCartRevome
                    onClick={() => dispatch({ type: "REMOVE_ITEM" })}
                  >
                    <Svg>
                      <path
                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                        id="a"
                        fill="#C3CAD9"
                        fill-rule="nonzero"
                      />
                    </Svg>
                  </ProductCartRevome>
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
