import React, { useState, useEffect } from "react";
import postSmurfs from "../actions/addSmurfs";

function SmurfForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  // useEffect(() => {
  //   props.getSmurfs();
  // }, []);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   props.postSmurfs({
  //     name: name,
  //     age: age,
  //     height: height
  //   });
  //   setName({ name });
  //   setAge({ age });
  //   setHeight({ height });
  // };

  return (
    <div>
      <form>
        <input type="text" value={name} placeholder="Name"></input>
        <input type="text" value={age} placeholder="Age"></input>
        <input type="text" value={height} placeholder="Height"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SmurfForm;
