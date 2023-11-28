import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/">Expensetrack</NavLink>
      <NavLink to="about">About</NavLink>
    </nav>
  );
};

export default Navbar;
