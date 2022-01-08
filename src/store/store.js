import { createStore, combineReducers } from "redux";
import { sliderReducer } from "./slider";

export const store = createStore(combineReducers({ slider: sliderReducer }));
