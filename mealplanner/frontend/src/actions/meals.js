import axios from "axios";
import { GET_MEALS, DELETE_MEAL, ADD_MEAL, UPDATE_MEAL } from "./types";
import { tokenConfig } from "./auth";

// GET MEALS
export const getMeals = () => (dispatch, getState) => {
  axios
    .get("/api/meals/", tokenConfig(getState))
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
export const deleteMeal = id => (dispatch, getState) => {
  axios
    .delete(`/api/meals/${id}/`, tokenConfig(getState))
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
export const addMeal = meal => (dispatch, getState) => {
  axios
    .post("/api/meals/", meal, tokenConfig(getState))
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
export const updateMeal = meal => (dispatch, getState) => {
  axios
    .put(`/api/meals/${meal.id}/`, meal, tokenConfig(getState))
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
