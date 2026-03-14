import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">MyApp</div>

      <div className="nav-links">
                <NavLink 
                        to="/" 
                        className={({ isActive }) => (isActive ? "isActive" : "")}
                        >
                        Home
                        </NavLink>

                        <NavLink 
                        to="/about" 
                        className={({ isActive }) => (isActive ? "isActive" : "")}
                        >
                        About
                        </NavLink>

                        <NavLink 
                        to="/dashboard" 
                        className={({ isActive }) => (isActive ? "isActive" : "")}
                        >
                        Dashboard
                        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;