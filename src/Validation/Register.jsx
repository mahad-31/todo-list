import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// Login.js:
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    if (name == "" || email == "" || password == "") {
        alert("Please fill in all fields")
        return
    }
    e.preventDefault();
    axios
      .post("http://localhost:8000/Register", { name,email, password })
      .then((res) => {
        console.log(res.data);
        if(res.data==="success"){
            alert("Registered Successfully")
        }
        else{
            alert("Registration failed")
        }
       
      });

      
       


  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Register</h2>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>
            
          </Form>
          <div>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
