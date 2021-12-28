const axios = require("axios");

class StudentsService {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5000/api/",
      //timeout: 1000,
      //headers: {'X-Custom-Header': 'foobar'}
    });
  }
  getStudents() {
    return this.instance.get("/students");
    /*
    return [
      {
        firstName: "Leo",
        lastName: "Nuda",
        age: "43",
        gender: "Male",
        department: "IT",
      },
      {
        firstName: "Goal",
        lastName: "Nefesh",
        age: "47",
        gender: "Female",
        department: "RnD",
      },
    ];
    */
  }
  getStudent(id) {
    return this.instance.get(`/students/${id}`);
  }
}

export const service = new StudentsService();
