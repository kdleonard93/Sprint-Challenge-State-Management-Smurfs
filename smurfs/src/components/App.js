import React, { useEffect } from "react";
import SmurfForm from "../components/SmurfForm";
import SmurfCard from "../components/SmurfCard";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm />
      <SmurfCard />
    </div>
  );
}

export default App;
