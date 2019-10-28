import GET_SMURF from "../actions/getSmurfs";
import POST_SMURF from "../actions/addSmurfs";

export const initialState = {
  smurfs: []
};

function reducer(initialState, action) {
  switch (action.type) {
    case { GET_SMURF }:
      return {
        smurfs: action.payload
      };

    case { POST_SMURF }:
      return {
        smurfs: [...initialState, action.payload]
      };

    default:
      return initialState;
  }
}

export default reducer;
