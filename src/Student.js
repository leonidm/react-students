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
      const result = await studentService.getStudent(id);
      setStudent(result.data);
    }
    return () => {};
  }, []);

  return (
    <>
      {student && <StudentView student={student} />}
      <Link to="{/main}" className="btn btn-primary">Go to list of students</Link>
    </>
  );
}
