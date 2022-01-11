import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles";

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

const Price = styled.div`
  color: ${COLORS.grayBlue};
  text-decoration: line-through;
  font-weight: 700;
`;
const PriceWithDiscount = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
`;
const Discount = styled.div`
  background-color: ${COLORS.lightGrayBlue};
  padding: 0.5rem;
  color: ${COLORS.orange};
  border-radius: 0.5rem;
  margin-left: 1.5rem;
  font-size: 1rem;
  font-weight: 700;
`;

// TODO: maybe the price should be getting from props?
const PriceDisplayer = ({ price, discount = 0 }) => {
  const finalPrice = price - (price * discount) / 100;
  return (
    <PriceContainer>
      <PriceWithDiscount>
        ${finalPrice.toFixed(2)}
        <Discount>{discount}%</Discount>
      </PriceWithDiscount>

      <Price>${price.toFixed(2)}</Price>
    </PriceContainer>
  );
};

export default PriceDisplayer;
