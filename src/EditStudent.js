import React, { Component, useState, useEffect } from "react";
import  { useParams } from "react-router-dom";
import { service as studentService } from "./StudentsService";

export default function EditStudent(props) {
  const [inputs, setInputs] = useState(props.student || {});
  let params = useParams();
  let id = params.id;
  
  useEffect(async () => {
    if (!props.student && id) {
      const result = await studentService.getStudent(id);
      setInputs(result.data);
    }
    return () => {};
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(id){
      //put
    }
    else{
      //post
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={inputs.firstName || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          name="lastName"
          value={inputs.lastName || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Gender:
        <select
          name="gender"
          value={inputs.gender || "Male"}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Department:
        <input
          type="text"
          name="department"
          value={inputs.department || ""}
          onChange={handleChange}
        />
      </label>

      <input type="submit" />
    </form>
  );
}
