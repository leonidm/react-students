import React, { Component } from "react";
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
    const result = await studentService.getStudents();
    this.setState({students: result.data});
  }

  render() {
    return (
      <>
        <h1 className="m-5 text-center">Students List</h1>
        {this.state.students.map((student, i) => (
          <StudentViewWithNavigation student={student} key={i}/>
        ))}
      </>
    );
  }
}
