import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="h-[10vh] border bg-secondary text-primary flex justify-between items-center">
        <Link to="/">Chutney</Link>
        <ul className="flex">
          <li className="p-2 mx-2 rounded-md">
            <NavLink
              to="/orders"
              exact
              className="p-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-primary hover:text-secondary focus:outline-none focus:ring focus:border-blue-300"
              activeClassName="bg-primary text-secondary"
            >
              Order
            </NavLink>
          </li>
          <li className="p-2 mx-2 rounded-md">
            <NavLink
              to="/maps"
              className="p-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-primary hover:text-secondary focus:outline-none focus:ring focus:border-blue-300"
              activeClassName="bg-primary text-secondary "
            >
              Maps
            </NavLink>
          </li>
          <li className="p-2 mx-2 rounded-md">
            <Link
              to="/contact"
              className="p-2 transition-colors duration-300 ease-in-out rounded-md hover:bg-primary hover:text-secondary focus:outline-none focus:ring focus:border-blue-300"
              activeClassName="bg-primary text-secondary "
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
