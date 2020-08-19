import { combineReducers } from "redux";
import tacoReducer from "./taco.reducer";

export default combineReducers({
    tacos: tacoReducer
})