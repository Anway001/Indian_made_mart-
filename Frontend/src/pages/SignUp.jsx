import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for React Toastify
import './SignUp.css';
import Navbar from '../Components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import the CSS for Font Awesome

const SignUp = () => {

  const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign-up and sign-in
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isSignUp) {
      setSignupInfo({
        ...signupInfo,
        [name]: value
      });
    } else {
      setLoginInfo({
        ...loginInfo,
        [name]: value
      });
    }
  };

  // Handle signup submit
  const handleSignUPSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });
      const data = await response.json();
      
      if (response.ok) {
        toast.success("Signup successful!", { position: "top-right", autoClose: 3000 });
        setIsSignUp(false); // Switch to the login form after signup
      } else {
        toast.error(data.message || 'An error occurred during signup', { position: "top-right", autoClose: 3000 });
      }
    } catch (error) {
      toast.error('An error occurred during signup', { position: "top-right", autoClose: 3000 });
    }
  };


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/auth/login', {
        email: loginInfo.email,
        password: loginInfo.password,
      });
  
      if (res.status === 200) {
        console.log(res.data);
        const token = res.data.token; // Assuming the token is in res.data.token
        const email = res.data.email; // Assuming the email is in res.data.email
        console.log(email);
        const user = JSON.stringify(res.data); // Assuming the name is in res.data.name
        console.log(name);
        localStorage.setItem('token', token); // Store the token in localStorage
        localStorage.setItem('user', user); // Store the user object in localStorage
        toast.success("Login successful!", { position: "top-right", autoClose: 3000 });
        navigate('/'); // Redirect to products page
      }
    } catch (error) {
      toast.error('Login failed. Please check your credentials.', { position: "top-right", autoClose: 3000 });
    }
  };
  

  

  const handleRegisterClick = () => {
    setIsSignUp(true);
  };

  const handleLoginClick = () => {
    setIsSignUp(false);
  };

  return (
    <>
      <ToastContainer /> {/* Toastify container for notifications */}
    <Navbar/>

      <div className='wrapper'>
        <div className={`containerr ${isSignUp ? 'active' : ''}`} id="container">
          <div className="form-containerr sign-up">
            <form onSubmit={handleSignUPSubmit}>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
              <span>or use your email for registration</span>
              <input
                className='input'
                type="text"
                name="name"
                placeholder="Name"
                value={signupInfo.name}
                onChange={handleInputChange}
              />
              <input
                className='input'
                type="email"
                name="email"
                placeholder="Email"
                value={signupInfo.email}
                onChange={handleInputChange}
              />
              <input
                className='input'
                type="password"
                name="password"
                placeholder="Password"
                value={signupInfo.password}
                onChange={handleInputChange}
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>

          <div className="form-containerr sign-in">
            <form onSubmit={handleLoginSubmit}>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
              <span>or use your email for sign in</span>
              <input
                className='input'
                type="email"
                name="email"
                placeholder="Email"
                value={loginInfo.email}
                onChange={handleInputChange}
              />
              <input
                className='input'
                type="password"
                name="password"
                placeholder="Password"
                value={loginInfo.password}
                onChange={handleInputChange}
              />
              <a href="#">Forgot Your Password?</a>
              <button type="submit">Sign In</button>
            </form>
          </div>

          <div className="toggle-containerr">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of the site features</p>
                <button className="hidden" id="login" onClick={handleLoginClick}>
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all of the site features</p>
                <button className="hidden" id="register" onClick={handleRegisterClick}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
