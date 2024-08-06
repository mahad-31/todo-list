import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/pictures/logo.png";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const Navbar = () => {
  const navigate = useNavigate();
  const [inputVisible, setInputVisible] = useState(false); // State to manage input visibility
  const [task, setTask] = useState(""); // State to manage the current task input
  const [tasks, setTasks] = useState([]); // State to manage the list of tasks

  const handleAdd = () => {
    setInputVisible(true); // Show the input field when Add button is clicked
  };

  const handleChange = (e) => {
    setTask(e.target.value); // Update the task state as the user types
  };

  const handleSubmit = () => {
    // Add the current task to the tasks array if it's not empty
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // Clear the input field
      setInputVisible(false); // Optionally hide the input field after adding the task
    }
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          logo
        </div>
        <ul className="nav-list">
          <li>home</li>
          <li>men</li>
          <li>women</li>
          <li>children</li>
        </ul>

        <div className="logo" onClick={handleLogin}>
          Login
        </div>
      </div>
      <div className="to-do-list">
        <div className="rows">
          <button className="button" onClick={handleAdd}>
            Add
          </button>
          <button className="button" onClick={() => setTasks([])}>
            Reset
          </button>
        </div>
      </div>
      {inputVisible && (
        <div className="rows">
          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={handleChange}
          />
          <button className="button" onClick={handleSubmit}>
            Add
          </button>
          
        </div>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
        {tasks.map((item, index) => (
          <tr>
          <td key={index}>{item}</td>
           <td> <button className="button"onClick={()=> setTasks(tasks.filter((_, i) => i !== index))}>
            Delete</button> </td>
            </tr>
            
        
          
        ))}
        </tbody>
      </Table>
      
    </>
  );
};

export default Navbar;
