import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Header from "./Header";

const AddProduct = (props) => {
  const [form, setForm] = useState({ name: "", price: "", description: "" });

  const history = useHistory();

  const onChangeHandler = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    fetch(`http://localhost:3000/product`, {
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
    history.push("/Home");
  };

  return (
    <div>
      <Header />
      <Card
        className="align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Card.Body>
          <h2 className="text-center mb-4">Add a product</h2>
          <Form style={{ minWidth: "50vh" }} onSubmit={submitHandler}>
            <Form.Group id="name">
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
            <Form.Group id="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="price"
                required
                id="price"
                name="price"
                onChange={onChangeHandler}
                value={form.price || ""}
              />
            </Form.Group>
            <Form.Group id="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="description"
                required
                id="description"
                name="description"
                onChange={onChangeHandler}
                value={form.description || ""}
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Add
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">Footer</Card.Footer>
      </Card>
    </div>
  );
};

export default AddProduct;
