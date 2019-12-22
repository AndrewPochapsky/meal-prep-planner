import { combineReducers } from "redux";
import meals from "./meals";
import states from "./states";

export default combineReducers({
  meals,
  states
});
