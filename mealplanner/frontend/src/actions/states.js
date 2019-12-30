import { TOGGLE_EDITING } from "./types";

export const toggleEditing = meal => dispatch => {
  dispatch({
    type: TOGGLE_EDITING,
    payload: meal
  });
};
