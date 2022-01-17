import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "./Icon";
import previousArrow from "../images/icon-previous.svg";
import nextArrow from "../images/icon-next.svg";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 350px;
  @media (min-width: 500px) {
    height: 400px;
    max-width: 800px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Next = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 1px solid gray;
  padding: 10px;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  &: hover {
    cursor: pointer;
  }
`;
const Prev = styled(Next)`
  left: 1rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (min-width: 500px) {
    object-fit: contain;
  }
`;

function Slider() {
  const index = useSelector((state) => state.slider.index);
  const images = useSelector((state) => state.slider.images);
  const dispatch = useDispatch();

  return (
    <SliderContainer>
      <Img src={images[index]} alt="slider" />
      <Prev onClick={() => dispatch({ type: "PREV" })}>
        <Icon src={previousArrow} alt="arrow left" width="10px" height="15px" />
      </Prev>
      <Next onClick={() => dispatch({ type: "NEXT" })}>
        <Icon src={nextArrow} alt="arrow right" width="10px" height="15px" />
      </Next>
    </SliderContainer>
  );
}

export default Slider;
