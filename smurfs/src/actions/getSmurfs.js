import React from "react";
import axios from "axios";

function getSmurfs() {
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

export default getSmurfs;
