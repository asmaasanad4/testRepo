import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const [product, setProducte] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/product/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProducte(data);
      });
  }, [id]);

  const history = useHistory();

  const onSubmitHandler = () => {
    history.push("/Home");
  };

  return (
    <Card>
      <Card.Body>
        <h2 className="w-100 text-center mt-2">Products details </h2>
        <h5 className="w-100  mt-2 ">Id : {product.id}</h5>
        <h5 className="w-100  mt-2 ">Name : {product.name}</h5>
        <h5 className="w-100  mt-2 ">Price : {product.price}</h5>
        <h5 className="w-100  mt-2 ">Description : {product.description}</h5>
        <div className="w-100 text-center mt-2 ">
          <Button
            className="w-100 mt-2"
            type="button"
            onClick={onSubmitHandler}
            style={{ maxWidth: "80vh" }}
          >
            Back
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
