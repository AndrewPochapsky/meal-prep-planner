import {
  GET_MEALS,
  DELETE_MEAL,
  ADD_MEAL,
  UPDATE_MEAL,
  UPDATE_STEP,
  ADD_STEP,
  DELETE_STEP
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
    case UPDATE_STEP:
      var meal = state.meals.find(meal => meal.id === action.payload.meal);
      var editedMeal = state.editedMeal;
      var i = 0;
      for (i = 0; i < editedMeal.steps.length; i++) {
        if (editedMeal.steps[i].id === action.payload.id) {
          break;
        }
      }
      editedMeal.steps[i] = action.payload;
      meal.steps[i] = action.payload;
      return {
        ...state,
        meals: [
          ...state.meals.filter(_meal => _meal.id !== action.payload.meal),
          meal
        ],
        editedMeal: editedMeal
      };
    //TODO: account for step number
    case ADD_STEP:
      var meal = state.meals.find(meal => meal.id === action.payload.meal);
      var editedMeal = state.editedMeal;
      meal.steps = [...meal.steps, action.payload];
      editedMeal.steps = meal.steps;
      return {
        ...state,
        meals: [
          ...state.meals.filter(_meal => _meal.id !== action.payload.meal),
          meal
        ],
        editedMeal: editedMeal
      };
    case DELETE_STEP:
      var meal = state.meals.find(meal => meal.id === action.payload.meal);
      var editedMeal = state.editedMeal;
      meal.steps = meal.steps.filter(step => step.id !== action.payload.id);
      editedMeal.steps = meal.steps;

      return {
        ...state,
        meals: [...state.meals.filter(_meal => _meal.id !== meal.id), meal],
        editedMeal: editedMeal
      };
    case TOGGLE_EDITING:
      return { ...state, editedMeal: action.payload };
    default:
      return state;
  }
}
