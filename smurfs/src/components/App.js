import React, { useEffect } from "react";
import { connect } from "react-redux";
import getSmurfs from "../actions/getSmurfs";
import SmurfForm from "../components/SmurfForm";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm />
    </div>
  );
}

// const mapStateToProps = {
//   getSmurfs
// };

// function mapDispatchToProps(state) {
//   return {
//     name: state.name,
//     age: state.age,
//     height: state.height
//   };
// }

export default App;
