import { TOGGLE_EDTING } from "./types";

export const toggleEditing = () => dispatch => {
  dispatch({
    type: TOGGLE_EDITING
  });
};
