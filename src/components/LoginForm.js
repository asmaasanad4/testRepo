import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as action from "../store/action-creator";

const LoginForm = (props) => {
  const correctUser = {
    email: "asmaa@as.com",
    password: "1234",
  };
  const [form, setForm] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const history = useHistory();

  const loading = useSelector((state) => state.authReducer.loading);
  const email = useSelector((state) => state.authReducer.email);
  const password = useSelector((state) => state.authReducer.password);

  const loggedIn = useSelector((state) => state.authReducer.loggedIn);

  if (loggedIn) {
    history.push("/Home");
  }

  if (email === correctUser.email && password === correctUser.password) {
    dispatch(action.loginSuccess());
  }
  if (email !== "" && password !== "" && loading && !loggedIn) {
    dispatch(action.loginfaild());
  }

  // const success = useSelector(state => state.fReducer.loginSuccess);
  // console.log(success);

  const onChangeHandler = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(action.tryLogin(form.email, form.password));
    console.log(form);
  };
  console.log(!loading && !loggedIn && email !== "" && password !== "");
  // const submitHandler = useCallback((e) => {
  //     e.preventDefault();
  // //    dispatch(action.login(form.email, form.password));
  // // console.log(success,"   hhhh");
  // //    if(success){
  // //     console.log("Done");
  // //     history.push("/Home");
  // //    }else{
  // //        console.log("Errooooooooooooooooooooooor");
  // //    }

  // },[dispatch, form.email, form.password, history, success]);
  // useEffect(() => {},[submitHandler,success]);

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form onSubmit={submitHandler}>
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
            {!loading ? (
              <Button className="w-100" type="submit">
                Login
              </Button>
            ) : (
              <div className="w-100 text-center mt-2">Loading</div>
            )}
            {!loading && !loggedIn && email !== "" && password !== "" && (
              <div>Enter valied email and password</div>
            )}
          </Form>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/Signup">Sign Up</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;
