import { TOGGLE_EDITING, GET_MEALS } from "../actions/types";

const initialState = {
  isEditing: false,
  mealsLoaded: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_EDITING:
      return {
        ...state,
        isEditing: !state.isEditing
      };
    case GET_MEALS:
      return {
        ...state,
        mealsLoaded: true //Assumption is that this being called implies that meals have been loaded
      };
    default:
      return state;
  }
}
