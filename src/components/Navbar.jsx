import React, {useState, useEffect}from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { FaMoon, FaSun } from "react-icons/fa";


const Navbar = () => {
const [darkMode, setDarkMode] = useState(false);
useEffect(() => {
  document.body.classList.toggle("dark-mode", darkMode);
}, [darkMode]);

  return (
    <nav className="nav-container">
      <div className="nav">
        <div>
      <NavLink to="/">Expenso</NavLink>
      </div>
      <div>
      <NavLink to="/about">About</NavLink>
      <button  style={{background:'none', border:'none', marginLeft:'12px',padding:'0'}}onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun style={{color:'var(--white)'}}/> : <FaMoon style={{color:'var(--white)', background:'var(--primary)'}} />}
      </button>
      </div>
    
      
      </div>
    </nav>
  );
};

export default Navbar;
