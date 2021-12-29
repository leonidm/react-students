import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { service as studentService } from "./StudentsService";
import StudentView from "./StudentView";

export default function Student(props) {
  const [student, setStudent] = useState(props.student);
  let params = useParams();

  useEffect(async () => {
    if (!props.student) {
      let id = params.id;
      try {
        const result = await studentService.getStudent(id);
        setStudent(result.data);
      } catch (e) {
        setStudent(null);
      }
    }
    return () => {};
  }, []);

  return (
    <>
      <h1 className="my-5 text-center">Student Details</h1>
      {student && <StudentView student={student} showGender={true} />}
      <Link to="{/main}" className="btn btn-primary mt-4">
        Back to List of Students
      </Link>
    </>
  );
}
