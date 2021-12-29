import React from "react";

export default function StudentView({ student, showGender }) {
  return (
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{student.firstName + " " + student.lastName}</h5>
        <h6 className="card-subtitle mb-4 text-muted">
          {student.department + ' department'}
        </h6>
        <p className="card-text">Age: {student.age || 'N/A'}</p>
        {showGender && <p className="card-text">Gender: {student.gender || 'N/A'}</p>}
      </div>
    </div>
  );
}
