import { GET_MEALS } from "../actions/types";

const initialState = {
  mealsLoaded: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        mealsLoaded: true //Assumption is that this being called implies that meals have been loaded
      };
    default:
      return state;
  }
}
