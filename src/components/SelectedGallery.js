import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Wrapper = styled.div`
  width: 50%;
  padding: 2rem;
  // height: 500px;
  // background-color: red;
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

  background-color: blue;
  border-radius: 0.5rem;
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
