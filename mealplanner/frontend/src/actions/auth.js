import axios from "axios";
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "./types";

// CHECK TOKEN AND LOAD USER
export const loadUser = () => (dispatch, getState) => {
  //user loading
  dispatch({
    type: USER_LOADING
  });

  //Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Types": "applicaton/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .get("/api/auth/user", config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: AUTH_ERROR
      });
    });
};
