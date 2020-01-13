import React, { useState } from "react";
import { connect } from "react-redux";

function SmurfForm({ postSmurf }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState("");

  const handleName = e => {
    setName(e.target.value);
  };
  const handleAge = e => {
    setAge(e.target.value);
  };
  const handleHeight = e => {
    setHeight(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const smurf = {
      name: name,
      age: age,
      height: height
    };
    postSmurf(smurf);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          placeholder="Name"
          onChange={handleName}
          value={name}
        />
        <br />
        <label htmlFor="age">Age</label>
        <input
          name="age"
          type="number"
          placeholder="Age"
          onChange={handleAge}
          value={age}
        />
        <br />
        <label htmlFor="height">Height</label>
        <input
          name="height"
          placeholder="Height in cm"
          onChange={handleHeight}
          value={height}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default SmurfForm;
