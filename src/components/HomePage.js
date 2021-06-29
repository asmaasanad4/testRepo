import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as action from "../store/action-creator";

const Signup = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const email = useSelector((state) => state.authReducer.email);

  const onSubmitHandler = () => {
    dispatch(action.logout());
    history.push("/");
  };

  return (
    <Card>
      <Card.Body>
        <h1>Home </h1>
        <h4 className="w-100 text-center mt-2 ">Welcome, {email}</h4>
        <Button className="w-100" type="button" onClick={onSubmitHandler}>
          Logout
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Signup;
