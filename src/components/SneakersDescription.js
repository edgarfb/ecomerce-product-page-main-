import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles";
import Amount from "./Amount";
import AddToCartBtn from "./AddToCartBtn";
import PriceDisplayer from "./PriceDisplayer";

const Container = styled.div`
  position: relative;
  padding: 1.5rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Name = styled.h2`
  color: ${COLORS.orange};
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Title = styled.h1`
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: ${COLORS.gray};
  line-height: 1.5;
  font-size: 0.9rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const WrapperForDesktop = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const SneakersDescription = ({ name, description, price, discount }) => {
  return (
    <Container>
      <Name>Sneakers Company</Name>
      <Title>{name}</Title>
      <Description>{description}</Description>

      <PriceDisplayer price={price} discount={discount} />
      <WrapperForDesktop>
        <Amount />
        <AddToCartBtn />
      </WrapperForDesktop>
    </Container>
  );
};

export default SneakersDescription;
