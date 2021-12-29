import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainList from "./MainList";
import About from "./About";
import Student from "./Student";
import EditStudent from "./EditStudent";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainList />} />
          <Route path="/main" element={<MainList />} />
          <Route path="/student/edit/:id" element={<EditStudent />} />
          <Route path="/student/add" element={<EditStudent />} />
          <Route path="/student/:id" element={<Student />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<MainList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
