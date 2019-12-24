import axios from "axios";
import { DELETE_STEP, UPDATE_STEP, ADD_STEP, SET_STEPS } from "./types";
// DELETE  STEP
export const deleteStep = step => dispatch => {
  axios
    .delete(`/api/steps/${step.id}/`)
    .then(res => {
      dispatch({
        type: DELETE_STEP,
        payload: { id: step.id, meal: step.meal }
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// UPDATE STEP
export const updateStep = step => dispatch => {
  axios
    .put(`/api/steps/${step.id}/`, step)
    .then(res => {
      dispatch({
        type: UPDATE_STEP,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// ADD STEP
export const addStep = step => dispatch => {
  axios
    .post(`/api/steps/`, step)
    .then(res => {
      dispatch({
        type: ADD_STEP,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// OFFSET STEPS
export const offsetSteps = (increment, ids) => dispatch => {
  if (ids.length > 0) {
    axios
      .post("/api/steps/offset_steps/", { increment: increment, steps: ids })
      .then(res => {
        dispatch({
          type: SET_STEPS,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  }
};
