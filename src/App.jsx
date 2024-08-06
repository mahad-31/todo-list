import React from "react";
import Navbar from "./navbar/navbar.jsx";
import Login from "./Validation/Login";
import Register from "./Validation/Register";
import { BrowserRouter, Route,Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
