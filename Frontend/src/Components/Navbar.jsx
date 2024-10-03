import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import profile icon
import './Navbar.css'; // Importing the CSS file
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



const Navbar = () => {

  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token'); // Check if a token is stored (as a way to check if logged in)
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setIsLoggedIn(false); // Update state
    navigate('/signup'); 
  };

  return (
    <nav className="navbar">
      <div className="navbarContent">
      <Link to="/" className="logo" style={{ color: 'white' }}>
          IndianMadeMart
        </Link>
        <ul className="navList">
          <li className="navItem"><a href="/products" className="navLink">Products</a></li>

          {isLoggedIn ? (
            <>
              <li className="navItem">
                <a href="/profile" className="user">
                  {/* <FontAwesomeIcon icon={faUser} /> profile */}
                  <FaRegUserCircle />
                </a>
              </li>
              <li className="navItem">
                <button onClick={handleLogout} className="navLink" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  Logout
                </button>
              </li>
              <li className="navItem">
                <a href="/cart" className="cart">
                 
                  <FaShoppingCart />
                </a>
              </li>
            </>
          ) : (
            <li className="navItem"><a href="/signup" className="navLink">Login</a></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
