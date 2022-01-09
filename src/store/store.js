import { createStore, combineReducers } from "redux";
import { sliderReducer } from "./slider";
import { amountReducer } from "./amount";
import { cartReducer } from "./cart";

export const store = createStore(
  combineReducers({
    slider: sliderReducer,
    amount: amountReducer,
    cart: cartReducer,
  })
);
