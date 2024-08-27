import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor='name'>Name</label>
        
        <input type = "text" name = 'name ' placeholder='Enter Your Name'></input>
        <br/>
        <label htmlFor='email'>Email</label>
        <input type = "email" name = 'email' placeholder='Enter Your Email'></input>
        <br/>
        <label htmlFor='password'>Password</label>
        <input type = "password" name = 'password' placeholder='Enter Your Password'></input>
        </form>
      
    </div>
  )
}

export default SignUp