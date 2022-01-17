import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Wrapper = styled.div`
  display: none;
  width: 50%;
  padding: 2rem;
  @media (min-width: 768px) {
    display: block;
  }
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

const ImagesSelectorBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-top: 1rem;
`;
const ImagesSelector = styled.img`
  width: calc((100% - 3rem) / 4);

  border-radius: 0.5rem;
  border: ${(props) => (props.actived === true ? "1px solid red" : "")};
  transition: opacity 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const SelectedGallery = () => {
  const bigImages = useSelector((state) => state.slider.images);
  const currentImage = useSelector(
    (state) => state.selectedGallery.currentImage
  );
  const images = useSelector((state) => state.selectedGallery.images);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <MainImage src={currentImage} alt="sneakers"></MainImage>
      <ImagesSelectorBox>
        {images.map((image, index) => {
          return (
            <ImagesSelector
              onClick={(e) => {
                dispatch({ type: "SELECT_IMAGE", payload: bigImages[index] });
              }}
              src={image}
              alt="sneakers"
              key={image}
            ></ImagesSelector>
          );
        })}
      </ImagesSelectorBox>
    </Wrapper>
  );
};

export default SelectedGallery;
