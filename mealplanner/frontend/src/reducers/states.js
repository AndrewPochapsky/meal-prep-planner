import { TOGGLE_EDITING } from "../actions/types";

const initialState = {
  isEditing: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_EDITING:
      return {
        ...state,
        isEditing: !isEditing
      };
    default:
      return state;
  }
}
