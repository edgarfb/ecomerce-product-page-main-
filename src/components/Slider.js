import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "./Icon";
import previousArrow from "../images/icon-previous.svg";
import nextArrow from "../images/icon-next.svg";

const ImgBox = styled.div`
  position: relative;
  min-width: 300px;
  max-width: 400px;
  width: 100%;
  height: 400px;
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
  top: 45%;
  right: 1rem;
`;
const Prev = styled(Next)`
  left: 1rem;
`;

const Img = styled.img`
  width: 100%;
`;

function Slider() {
  const index = useSelector((state) => state.slider.index);
  const images = useSelector((state) => state.slider.images);
  const dispatch = useDispatch();

  return (
    <div>
      <ImgBox>
        <Img src={images[index]} alt="slider" />
        <Prev onClick={() => dispatch({ type: "PREV" })}>
          <Icon src={previousArrow} width="15px" height="15px" />
        </Prev>
        <Next onClick={() => dispatch({ type: "NEXT" })}>
          <Icon src={nextArrow} width="15px" height="15px" />
        </Next>
      </ImgBox>
    </div>
  );
}

export default Slider;
