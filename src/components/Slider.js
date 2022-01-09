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
`;

const Next = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
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
`;

function Slider() {
  const index = useSelector((state) => state.slider.index);
  const images = useSelector((state) => state.slider.images);
  const dispatch = useDispatch();

  return (
    <SliderContainer>
      <Img src={images[index]} alt="slider" />
      <Prev onClick={() => dispatch({ type: "PREV" })}>
        <Icon src={previousArrow} width="10px" height="15px" />
      </Prev>
      <Next onClick={() => dispatch({ type: "NEXT" })}>
        <Icon src={nextArrow} width="10px" height="15px" />
      </Next>
    </SliderContainer>
  );
}

export default Slider;
