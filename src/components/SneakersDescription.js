import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles";

const Container = styled.div`
  position: relative;
  padding: 1.5rem;
`;

const Name = styled.h2`
  color: ${COLORS.orange};
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const Title = styled.h1``;

const Description = styled.p`
  color: ${COLORS.gray};
  line-height: 1.5;
  font-size: 0.9rem;
`;

const SneakersDescription = ({ name, title, description }) => {
  return (
    <Container>
      <Name>The companie´s name</Name>
      <Title>Fall Limited Edition Sneakers</Title>
      <Description>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Description>
    </Container>
  );
};

export default SneakersDescription;
