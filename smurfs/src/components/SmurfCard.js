import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/smurfAction";

function SmurfCard(props) {
  console.log(props);
  useEffect(() => {
    props.getSmurf();
  }, []);

  return (
    <div className="smurf">
      Name:
      {props.smurf.map(smurf => {
        return <h1>{smurf.name}</h1>;
      })}
      <h4>Age: {props.age}</h4>
      <h4>Height: {props.height}</h4>
    </div>
  );
}

export default connect(
  function(state) {
    return {
      smurf: state.smurf
    };
  },
  { getSmurf }
)(SmurfCard);
