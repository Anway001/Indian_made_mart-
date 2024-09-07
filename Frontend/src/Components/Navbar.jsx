import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      IndianMadeMart
    </div>
    <ul className="navbar-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/Signup">SignUp</a></li>
    </ul>
  </nav>
  )
}

export default Navbar