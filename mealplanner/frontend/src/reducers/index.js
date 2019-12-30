import { combineReducers } from "redux";
import meals from "./meals";
import states from "./states";
import auth from "./auth";

export default combineReducers({
  meals,
  states,
  auth
});
