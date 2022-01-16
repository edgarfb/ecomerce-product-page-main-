import firstImage from "../images/image-product-1.jpg";
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";

const initialState = {
  currentImage: firstImage,
  images: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
};

export const selcetedGalleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_IMAGE":
      return {
        ...state,
        currentImage: action.payload,
      };
    default:
      return state;
  }
};
