import axios from "axios";
import {
  GET_MEALS,
  DELETE_MEAL,
  ADD_MEAL,
  UPDATE_MEAL,
  UPDATE_STEP,
  DELETE_STEP,
  SET_STEPS,
  ADD_STEP
} from "./types";

// GET MEALS
export const getMeals = () => dispatch => {
  axios
    .get("/api/meals/")
    .then(res => {
      dispatch({
        type: GET_MEALS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// DELETE  MEAL
export const deleteMeal = id => dispatch => {
  axios
    .delete(`/api/meals/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_MEAL,
        payload: id
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// ADD MEAL
export const addMeal = meal => dispatch => {
  axios
    .post("/api/meals/", meal)
    .then(res => {
      dispatch({
        type: ADD_MEAL,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// UPDATE  MEAL
export const updateMeal = meal => dispatch => {
  axios
    .put(`/api/meals/${meal.id}/`, meal)
    .then(res => {
      dispatch({
        type: UPDATE_MEAL,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

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
