import React from "react";
import axios from "axios";

function getSmurfs(smurfs) {
  const GET_SMURF = "GET_SMURF";
  return dispatch => {
    dispatch({ type: GET_SMURF });
    axios
      .get(`http://localhost:3333/smurfs`, smurfs)
      .then(res => {
        console.log(res);
        dispatch({ type: GET_SMURF, payload: res.data });
      })
      .catch(error => {
        console.log("Error:", error);
      });
  };
}

export default getSmurfs;
