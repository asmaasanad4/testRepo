import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/product-details";
import AddProduct from "./components/add-product";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Home">
            <HomePage />
          </Route>
          <Route path="/" exact>
            <LoginForm />
          </Route>
          <Route path="/prodDetails/:id">
            <ProductDetails />
          </Route>
          <Route path="/addProd">
            <AddProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
