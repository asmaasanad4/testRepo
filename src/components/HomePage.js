import React, { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as action from "../store/action-creator";
import Header from "./Header";

const Signup = (props) => {
  const [products, setProductes] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => {
        setProductes(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const name = useSelector((state) => state.signupReducer.name);

  const onSubmitHandler = () => {
    dispatch(action.logout());
    history.push("/");
  };

  return (
    <div>
      <Header />
      <Card>
        <Card.Body>
          <h4 className="w-100 text-center mt-2 ">Welcome, {name}</h4>
          <h5 className="w-100  mt-2 "> Products</h5>
          {products.map((product) => {
            return (
              <Link to={`/prodDetails/${product.id}`}>
                <Form className=" m-2 p-2 ">
                  <h5 className="w-100  mt-2 ">Name : {product.name}</h5>
                  <h6 className="w-100  mt-2 ">Id : {product.id}</h6>
                  <h6 className="w-100 mt-2 ">Price : {product.price}</h6>
                </Form>
              </Link>
            );
          })}
          <div className="w-100 text-center mt-2 ">
            <Button
              className="w-100 mt-2 "
              type="button"
              style={{ maxWidth: "80vh" }}
              onClick={onSubmitHandler}
            >
              Logout
            </Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">Footer</Card.Footer>
      </Card>
    </div>
  );
};

export default Signup;
