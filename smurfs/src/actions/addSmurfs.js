import React from "react";
import axios from "axios";

function postSmurfs() {
  const POST_SMURF = "POST_SMURF";
  return dispatch => {
    axios
      .post(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log(res);
        dispatch({ type: POST_SMURF, payload: res.data });
      })
      .catch(error => {
        console.log("Error:", error);
      });
  };
}

export default postSmurfs;
