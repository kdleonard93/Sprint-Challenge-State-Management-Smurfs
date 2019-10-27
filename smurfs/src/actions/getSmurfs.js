import React from "react";
import axios from "axios";

function getSmurfs() {
  const GET_SMURF = "GET_SMURF";
  return dispatch => {
    axios
      .get(`http://localhost:3333/smurfs`)
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
