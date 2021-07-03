import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as action from "../store/signup-action-creator";

const Signup = (props) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const signedup = useSelector((state) => state.signupReducer.signedup);
  const name = useSelector((state) => state.signupReducer.name);
  const email = useSelector((state) => state.signupReducer.email);
  const loading = useSelector((state) => state.signupReducer.loading);
  const password = useSelector((state) => state.signupReducer.password);

  const history = useHistory();
  const dispatch = useDispatch();

  if (name && email && password && loading) {
    dispatch(action.signupSuccess());
  }

  if (signedup) {
    history.push("/");
  }

  const onChangeHandler = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(action.trySignup(form.name, form.email, form.password));
    console.log(form);
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group id="email">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                required
                id="name"
                name="name"
                onChange={onChangeHandler}
                value={form.name || ""}
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                id="email"
                name="email"
                onChange={onChangeHandler}
                value={form.email || ""}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                id="password"
                name="password"
                onChange={onChangeHandler}
                value={form.password || ""}
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            Aleady have an account? <Link to="/Login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Signup;
