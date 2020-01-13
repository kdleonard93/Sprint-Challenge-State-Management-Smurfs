import React from "react";
import axios from "axios";

export const FETCH_SMURFS_NAME = "FETCH_SMURFS_NAME";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
const POST_SMURF = "POST_SMURF";

export const getSmurf = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_NAME });

    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log("Error:", err);
      });
  };
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
