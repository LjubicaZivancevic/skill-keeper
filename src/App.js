import logo from "./logo.svg";
import "./App.css";
import Skills from "./pages/Skills";
import { Routes, Route, Link } from "react-router-dom";
import Task from "./pages/Task";
import Users from "./pages/Users";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import AddUser from "./pages/AddUser";
import React, { useEffect} from "react";
import skillsApi from "./api/skillsApi";
import BookedUsers from "./pages/BookedUsers";

function App() {

  const {getDataAX} = skillsApi()

  useEffect(() => {
    getDataAX();
  }, []);

  
  return (
    <div>
      <ResponsiveAppBar />

      {/* TODO Rute izdvojiti u poseban fajl */}
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="users" element={<Users />} />
        <Route path="skills" element={<Skills />} />
        <Route path="addUser" element={<AddUser />} />
        <Route path="booked" element={<BookedUsers/>} />
      </Routes>
    </div>
  );
}

export default App;
