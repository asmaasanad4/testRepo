import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="   m-4 bg-light expand-lg  ">
      <h1>App</h1>
      <div>
        <Link className="p-2 m-4" to="/Home">
          Home
        </Link>
        <Link className="p-2 m-4" to="/addProd">
          Products
        </Link>
      </div>
    </Navbar>
  );
};

export default Header;
