import axios from "axios";
import { GET_MEALS, DELETE_MEAL, ADD_MEAL } from "./types";

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
