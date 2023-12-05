import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav">
      <NavLink to="/">Expenso</NavLink>
      <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
