import {
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_START,
  FETCH_SMURFS_FAIL,
  POST_SMURF
} from "../actions/";

const initialState = {
  smurf: [
    {
      name: "",
      age: null,
      height: ""
    }
  ],
  isFetching: false
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SMURFS_SUCCESS:
      console.log("state", action.payload);
      return {
        ...state,
        smurf: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case POST_SMURF:
      return {
        ...state,
        smurf: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
