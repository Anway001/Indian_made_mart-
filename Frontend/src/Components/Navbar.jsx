import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import profile icon
import './Navbar.css'; // Importing the CSS file
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger icons



const Navbar = () => {

  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const navigate = useNavigate();
  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token'); // Check if a token is stored (as a way to check if logged in)
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);



  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  }

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  }

  const handleOptionClick = (option) => {
    if (option === 'Logout') {
        handleLogout();
    }
    else if (option === 'Profile') {
        navigate('/profile');
    }
    else {
        console.log(`${option} clicked`);
        setIsOpen(false);
    }
    setIsMenuOpen(false); // Close mobile menu after action
}


  //      // Logout function
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
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navList ${isMenuOpen ? 'navList--open' : ''}`}>
          <li className="navItem"><a href="/products" className="navLink" onClick={() => setIsMenuOpen(false)}>Products</a></li>

          {isLoggedIn ? (
            <>
              <li className="navItem">
                <h1 className='user' onClick={toggleDropdown}>
                  <FaRegUserCircle />
                  {isOpen && (
                    <div className="dropdown-menu">
                      <button onClick={() => handleOptionClick('Profile')}>Profile</button>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </h1>
              </li>

              <li className="navItem">
                <Link to='/cart' className="cart" onClick={() => setIsMenuOpen(false)}>
                  <FaShoppingCart />
                </Link>
              </li>
            </>
          ) : (
            <li className="navItem"><a href="/signup" className="navLink" onClick={() => setIsMenuOpen(false)}>Login</a></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
