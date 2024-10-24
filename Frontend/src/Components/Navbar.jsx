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
  const [isOpen, setIsOpen] = useState(false);
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
        <ul className="navList">
          <li className="navItem"><a href="/products" className="navLink">Products</a></li>

          {isLoggedIn ? (
            <>
              <li className="navItem">
            <h1 className='user' onClick={toggleDropdown}>
                
                  <FaRegUserCircle />
                  {isOpen && (
                <div className="dropdown-menu">
                    <button onClick={() => handleOptionClick('Profile')}>Profile</button>
                    <button onClick={() => handleOptionClick('Settings')}>Settings</button>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
            </h1>
             
              </li>
            
                  
              <li className="navItem">
                <Link to ='/cart'  className="cart" >
                 
                  <FaShoppingCart />
             </Link>
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
