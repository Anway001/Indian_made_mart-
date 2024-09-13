import React from 'react';
import './Navbar.css'; // Importing the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContent">
        <h1 className="logo">IndianMadeMart</h1>
        <ul className="navList">
          <li className="navItem"><a href="/" className="navLink">Home</a></li>
          <li className="navItem"><a href="/products" className="navLink">Products</a></li>
          <li className="navItem"><a href="/about" className="navLink">About Us</a></li>
          <li className="navItem"><a href="/contact" className="navLink">Contact</a></li>
          <li className="navItem"><a href="/login" className="navLink">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
