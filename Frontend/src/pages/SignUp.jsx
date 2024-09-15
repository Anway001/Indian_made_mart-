import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import Navbar from '../Components/Navbar'

const SignUp = () => {
  return (
    <>
   
    <div className='container'>
      
      <form className='form-container'>
      <h1 className='heading'>Sign Up</h1>
        <label htmlFor='name'>Name</label>
        
        <input type = "text" name = 'name ' placeholder='Enter Your Name'></input>
        <br/>
        <label htmlFor='email'>Email</label>
        <input type = "email" name = 'email' placeholder='Enter Your Email'></input>
        <br/>
        <label htmlFor='password'>Password</label>
        <input type = "password" name = 'password' placeholder='Enter Your Password'></input>
        <br/>
        
          
        <span>already a user 
          <Link to = '/login'>Login</Link>
           </span>
        <button className='signup'>SignUp</button>

        </form>
      
    </div>
    </>
  )
}

export default SignUp