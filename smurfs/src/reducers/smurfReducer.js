import {
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_START,
  POST_SMURF
} from "../actions";

const initialState = {
  smurf: [
    {
      name: "",
      age: null,
      height: ""
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SMURFS_SUCCESS:
      console.log("state", action.payload);
      return {
        ...state,
        smurf: action.payload
      };

    case POST_SMURF:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
