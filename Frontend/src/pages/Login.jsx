import React from "react";
import Navbar from "../Components/Navbar";

function Login() {
  return(
    <>
    <Navbar />
    <div className="container">
        <h1>Login</h1>
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email"  name = "email" placeholder="Enter Your Email"></input>
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name = "password" placeholder="Enter Your Password"></input>
            <br />
            <button type="submit">Login</button>
        </form>
    </div>
    </>
  )
}

export default Login;