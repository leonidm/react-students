import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    alert(JSON.stringify(inputs));
    if (id) {
      //put
    } else {
      //post
    }
  };

  return (
    <>
      <h1 className="my-5 me-5 text-center">{id ? "Edit" : "Add"} Student</h1>
      <div className="row">
        <div className="col-md-2"></div>
        <form onSubmit={handleSubmit} className="col-md-6">
          <div class="mb-3">
            <label for="firstname" class="form-label">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="firstname"
              value={inputs.firstName || ""}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="lastname"
              value={inputs.lastName || ""}
              onChange={handleChange}
            />
          </div>

          <div class="mb-3">
            <label for="gendeer" class="form-label">
              Gender:
            </label>
            <select
              name="gender"
              id="gender"
              className="form-select"
              value={inputs.gender || "Male"}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="age" class="form-label">
              Age:
            </label>
            <input
              type="number"
              name="age"
              id="age"
              className="form-control"
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="department" class="form-label">
              Department:
            </label>
            <input
              type="text"
              name="department"
              id="department"
              className="form-control"
              value={inputs.department || ""}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-4"
            style={{ width: "100px" }}
          >
            {id ? "Edit" : "Add"}
          </button>
        </form>
      </div>
    </>
  );
}
