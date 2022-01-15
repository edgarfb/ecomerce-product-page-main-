import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Wrapper = styled.div`
  width: 50%;
  padding: 2rem;
  height: 500px;
  background-color: red;
`;

const MainImage = styled.img`
  width: 400px;
  height: 400px;
`;

const ImagesSelectorBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ImagesSelector = styled.img`
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 0.25rem;
`;

const SelectedGallery = () => {
  const bigImages = useSelector((state) => state.slider.images);
  console.log(bigImages);
  const currentImage = useSelector(
    (state) => state.selectedGallery.currentImage
  );
  const images = useSelector((state) => state.selectedGallery.images);
  console.log("currentImage", images);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <MainImage src={currentImage}></MainImage>
      <ImagesSelectorBox>
        {images.map((image, index) => {
          return (
            <ImagesSelector
              onClick={
                // () => console.log(index)
                () =>
                  dispatch({ type: "SELECT_IMAGE", payload: bigImages[index] })
              }
              src={image.src}
            ></ImagesSelector>
          );
        })}
      </ImagesSelectorBox>
    </Wrapper>
  );
};

export default SelectedGallery;
