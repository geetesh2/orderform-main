import React from 'react';
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">APML</div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><Link to="/order">Orders</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
