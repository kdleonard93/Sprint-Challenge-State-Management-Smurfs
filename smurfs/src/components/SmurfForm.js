import React, { useState, useEffect } from "react";
import { postSmurfs } from "../actions/addSmurfs";
import { getSmurfs } from "../actions/getSmurfs";

function SmurfForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  // useEffect(() => {
  //   props.getSmurfs();
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();
    props.postSmurfs({
      name: name,
      age: age,
      height: height
    });
    setName({ name });
    setAge({ age });
    setHeight({ height });
  };

  const handleNameChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleAgeChange = e => {
    e.preventDefault();
    setAge(e.target.value);
  };

  const handleHeightChange = e => {
    e.preventDefault();
    setHeight(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleNameChange}
          value={name}
          placeholder="Name"
        ></input>
        <input
          type="text"
          onChange={handleAgeChange}
          value={age}
          placeholder="Age"
        ></input>
        <input
          type="text"
          onChange={handleHeightChange}
          value={height}
          placeholder="Height"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SmurfForm;
