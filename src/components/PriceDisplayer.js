import React from "react";
import styled from "styled-components";

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.div``;
const PriceWithDiscount = styled.div``;
const Discount = styled.div``;

const PriceDisplayer = () => {
  return (
    <PriceContainer>
      <PriceWithDiscount>125</PriceWithDiscount>
      <Discount>50%</Discount>
      <Price>250</Price>
    </PriceContainer>
  );
};

export default PriceDisplayer;
