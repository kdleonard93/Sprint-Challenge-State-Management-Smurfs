import React, { useState, useEffect } from "react";
import { postSmurfs } from "../actions/addSmurfs";
import { getSmurfs } from "../actions/getSmurfs";
import "./App.css";

function App(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
    </div>
  );
}

export default App;
