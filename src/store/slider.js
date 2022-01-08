import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";

const initialState = {
  index: 0,
  images: [product1, product2, product3, product4],
};
export const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT":
      if (state.index === state.images.length - 1) {
        return { ...state, index: 0 };
      } else {
        return { ...state, index: state.index + 1 };
      }
    case "PREV":
      if (state.index === 0) {
        return { ...state, index: state.images.length - 1 };
      } else {
        return { ...state, index: state.index - 1 };
      }
    default:
      return state;
  }
};
export const getName = (state) => state.name;
