import React from "react";
import { useNavigate } from "react-router-dom";
import StudentView from "./StudentView";
import { service as studentService } from "./StudentsService";

export default function StudentViewWithNavigation({ student, onDeleted }) {
  let navigate = useNavigate();

  function viewStudent() {
    navigate(`/student/${student.id}`, { state: { student } });
  }

  function editStudent() {
    navigate(`/student/edit/${student.id}`, { state: { student } });
  }

  async function deleteStudent() {
    try {
      await studentService.deleteStudent(student.id);
    } catch (e) {
      window.alert("Failed to delete");
    }
    onDeleted();
  }

  return (
    <div className="mb-3">
      <StudentView student={student} />
      <button
        className="btn btn-sm btn-secondary me-2 my-1"
        onClick={viewStudent}
      >
        View
      </button>
      <button
        className="btn btn-sm btn-secondary mx-2 my-1"
        onClick={editStudent}
      >
        Edit
      </button>
      <button
        className="btn btn-sm btn-secondary mx-2 my-1"
        onClick={deleteStudent}
      >
        Delete
      </button>
    </div>
  );
}
