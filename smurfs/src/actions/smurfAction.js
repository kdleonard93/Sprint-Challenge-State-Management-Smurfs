import axios from "axios";

export const FETCH_SMURFS_NAME = "FETCH_SMURFS_NAME";
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";
export const POST_SMURF = "POST_SMURF";

export const getSmurf = () => dispatch => {
  dispatch({ type: "FETCH_SMURF_START" });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: "FETCH_SMURF_SUCCESS", payload: res.data }))
    .catch(err => dispatch({ type: "FETCH_SMURF_FAIL", payload: err }));
};

export const postSmurf = newSmurf => {
  return dispatch => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        dispatch({ type: POST_SMURF, payload: res.data });
      })
      .catch(err => {
        console.log("Error:", err);
      });
  };
};
