import { createStore, combineReducers } from "redux";
import { sliderReducer } from "./slider";
import { amountReducer } from "./amount";

export const store = createStore(
  combineReducers({ slider: sliderReducer, amount: amountReducer })
);
