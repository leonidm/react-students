import React, { Component } from "react";
import { Link } from "react-router-dom";
import { service as studentService } from "./StudentsService";
import StudentViewWithNavigation from "./StudentViewWithNavigation";

export default class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  async componentDidMount() {
    await this.getStudents();
  }

  addClick = () => {
    this.props.history.push("/student/add");
  };

  onStudentDeleted = async () => {
    await this.getStudents();
  };

  async getStudents() {
    const result = await studentService.getStudents();
    this.setState({ students: result.data });
  }

  render() {
    return (
      <>
        <h1 className="m-5 text-center">Students List</h1>
        <div>
          <Link className="btn btn-secondary mb-4" to="/student/add">
            Add New Student
          </Link>
        </div>
        {this.state.students.map((student, i) => (
          <StudentViewWithNavigation
            student={student}
            onDeleted={this.onStudentDeleted}
            key={i}
          />
        ))}
      </>
    );
  }
}
