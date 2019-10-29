import React, { useState, useEffect } from "react";
import { postSmurfs } from "../actions/addSmurfs";
import { getSmurfs } from "../actions/getSmurfs";
import axios from "axios";
import { withFormik } from "formik";
import * as yup from "yup";
// import { FormDiv, Heading, Input, Button, Error } from "./StyledComponents";

const SmurfForm = ({ errors, touched, status }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    if (status) {
      setName([...name, status]);
    }
  }, [name, status]);

  useEffect(() => {
    if (status) {
      setAge([...age, status]);
    }
  }, [age, status]);

  useEffect(() => {
    if (status) {
      setHeight([...height, status]);
    }
  }, [height, status]);

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
    <>
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
    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      name: values.plant_name || "",
      age: values.age || "",
      height: values.height || ""
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required(),
    age: yup.string().required(),
    height: yup.string().required()
  }),
  handleSubmit: (smurfs, { props, setStatus, resetForm }) => {
    axios
      .post("http://localhost:3333/smurfs", smurfs)
      .then(response => {
        console.log(response.data);
        setStatus(response.data);
        resetForm();
        return props.history.push("/home");
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
})(SmurfForm);
// function SmurfForm(props) {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [height, setHeight] = useState("");

//   // useEffect(() => {
//   //   props.getSmurfs();
//   // }, []);

//   const handleSubmit = e => {
//     e.preventDefault();
//     props.postSmurfs({
//       name: name,
//       age: age,
//       height: height
//     });
//     setName({ name });
//     setAge({ age });
//     setHeight({ height });
//   };

//   const handleNameChange = e => {
//     e.preventDefault();
//     setName(e.target.value);
//   };

//   const handleAgeChange = e => {
//     e.preventDefault();
//     setAge(e.target.value);
//   };

//   const handleHeightChange = e => {
//     e.preventDefault();
//     setHeight(e.target.value);
//   };

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           onChange={handleNameChange}
//           value={name}
//           placeholder="Name"
//         ></input>
//         <input
//           type="text"
//           onChange={handleAgeChange}
//           value={age}
//           placeholder="Age"
//         ></input>
//         <input
//           type="text"
//           onChange={handleHeightChange}
//           value={height}
//           placeholder="Height"
//         ></input>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default SmurfForm;
