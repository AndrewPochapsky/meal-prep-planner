import {
  GET_MEALS,
  DELETE_MEAL,
  ADD_MEAL,
  UPDATE_MEAL
} from "../actions/types";
import { TOGGLE_EDITING } from "../actions/types";

const initialState = {
  meals: [],
  editedMeal: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        meals: action.payload
      };
    case DELETE_MEAL:
      return {
        ...state,
        meals: state.meals.filter(meal => meal.id !== action.payload)
      };
    case ADD_MEAL:
      return {
        ...state,
        meals: [...state.meals, action.payload]
      };
    case UPDATE_MEAL:
      return {
        ...state,
        meals: [
          ...state.meals.filter(meal => meal.id !== action.payload.id),
          action.payload
        ]
      };
    case TOGGLE_EDITING:
      return { ...state, editedMeal: action.payload };
    default:
      return state;
  }
}
