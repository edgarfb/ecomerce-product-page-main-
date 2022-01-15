import { createStore, combineReducers } from "redux";
import { sliderReducer } from "./slider";
import { amountReducer } from "./amount";
import { cartReducer } from "./cart";
import { menuReducer } from "./menu";
import { productsReducer } from "./products";
import { selcetedGalleryReducer } from "./selectedGallery";

export const store = createStore(
  combineReducers({
    slider: sliderReducer,
    amount: amountReducer,
    cart: cartReducer,
    menu: menuReducer,
    products: productsReducer,
    selectedGallery: selcetedGalleryReducer,
  })
);
