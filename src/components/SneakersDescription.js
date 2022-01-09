import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const Name = styled.h2``;

const Title = styled.h1``;

const Description = styled.p``;

const SneakersDescription = ({ name, title, description }) => {
  return (
    <Container>
      <Name>The companie´s name</Name>
      <Title>Fall Limited Editio Sneakers</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        voluptatem officia quisquam deleniti sequi magni ratione! Doloremque, et
        odit corrupti velit eos voluptas minus a iure itaque ipsa, sapiente
        explicabo?
      </Description>
    </Container>
  );
};

export default SneakersDescription;
