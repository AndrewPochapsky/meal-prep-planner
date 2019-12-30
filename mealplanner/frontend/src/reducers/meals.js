import {
  GET_MEALS,
  DELETE_MEAL,
  ADD_MEAL,
  UPDATE_MEAL,
  UPDATE_STEP,
  ADD_STEP,
  SET_STEPS,
  DELETE_STEP,
  TOGGLE_EDITING
} from "../actions/types";

const initialState = {
  meals: [],
  editedMeal: {},
  editedSteps: []
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
      var index = state.meals.findIndex(m => m.id === action.payload.id);
      var meals = [...state.meals];
      meals[index] = action.payload;
      return {
        ...state,
        meals: meals
      };
    case UPDATE_STEP:
      var meal = state.meals.find(meal => meal.id === action.payload.meal);
      var editedSteps = [...state.editedSteps];
      var i = 0;
      for (i = 0; i < editedSteps.length; i++) {
        if (editedSteps[i].id === action.payload.id) {
          break;
        }
      }
      editedSteps[i] = action.payload;
      meal.steps[i] = action.payload;
      return {
        ...state,
        meals: [
          ...state.meals.filter(_meal => _meal.id !== action.payload.meal),
          meal
        ],
        editedSteps: editedSteps
      };

    case ADD_STEP:
      var index = state.meals.findIndex(m => m.id === action.payload.meal);
      var meal = state.meals[index];
      //inserts new step at position step_number - 1
      meal.steps.splice(action.payload.step_number - 1, 0, action.payload);

      var meals = [...state.meals];
      meals[index] = meal;
      return {
        ...state,
        meals: meals,
        editedSteps: jQuery.isEmptyObject(state.editedSteps)
          ? []
          : [...meal.steps]
      };
    case DELETE_STEP:
      var meal = state.meals.find(meal => meal.id === action.payload.meal);
      meal.steps = meal.steps.filter(step => step.id !== action.payload.id);
      return {
        ...state,
        meals: [...state.meals.filter(_meal => _meal.id !== meal.id), meal],
        editedSteps: [...meal.steps]
      };

    case SET_STEPS:
      var index = state.meals.findIndex(m => m.id === action.payload[0].meal);
      var meal = state.meals[index];
      let map = new Map();
      for (let step of action.payload) {
        map.set(step.id, step);
      }
      for (let i = 0; i < meal.steps.length; i++) {
        if (map.has(meal.steps[i].id)) {
          meal.steps[i] = map.get(meal.steps[i].id);
        }
      }
      var meals = [...state.meals];
      meals[index] = meal;
      return {
        ...state,
        meals: meals,
        editedSteps: jQuery.isEmptyObject(state.editedSteps)
          ? []
          : [...meal.steps]
      };

    case TOGGLE_EDITING:
      return {
        ...state,
        editedMeal: action.payload,
        editedSteps: jQuery.isEmptyObject(action.payload)
          ? []
          : [...action.payload.steps]
      };
    default:
      return state;
  }
}
