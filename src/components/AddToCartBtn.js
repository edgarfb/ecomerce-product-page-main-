import React from "react";
import styled from "styled-components";
import SvgIcon from "./SvgIcon";
import { COLORS } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { products } from "../store/products";

const Btn = styled.button`
  width: 100%;
  text-align: center;
  color: ${COLORS.white};
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 0;
  margin-top: 2rem;
  background-color: ${COLORS.orange};
  opacity: ${(props) => (props.isBtnActived ? "1" : ".5")};
  border: none;
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const AddToCartBtn = () => {
  const isBtnActived = useSelector((state) => state.amount.isBtnActived);
  const products = useSelector((state) => state.products);
  const amount = useSelector((state) => state.amount.amount);
  const dispatch = useDispatch();
  console.log(amount);
  const finalPrice = () => {
    let finalPrice =
      products.price - products.price * (products.discount / 100);
    return finalPrice.toFixed(2);
  };
  return (
    <Btn
      disabled={!isBtnActived}
      isBtnActived={isBtnActived}
      onClick={() => {
        dispatch({
          type: "ADD_ITEM",
          payload: { ...products, amount, finalPrice: finalPrice() },
        });
      }}
    >
      <SvgIcon fill="white" style={{ marginRight: "1rem" }}>
        <path
          d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
          fillRule="nonzero"
        />
      </SvgIcon>
      Add to cart
    </Btn>
  );
};

export default AddToCartBtn;
