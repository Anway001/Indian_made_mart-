import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./Login.css"

function Login() {
  return(
    <>
    
    <div className="container">
       
        <form>
        <h1 className="heading">Login</h1>
            <label htmlFor="email">Email:</label>
            <input type="email"  name = "email" placeholder="Enter Your Email"></input>
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name = "password" placeholder="Enter Your Password"></input>
            <br />

            <span>Dont have an account.. 
              <Link to="/signup">Signup</Link>
              </span> 
            <button className='login-btn'type="submit">Login</button>
        </form>
        
    </div>
    </>
  )


}

export default Login;

