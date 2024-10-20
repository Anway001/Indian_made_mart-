import React from 'react'
import './Profile.css'
import Navbar from './Navbar';
import { FaRegUserCircle } from "react-icons/fa";

function Profile() {
    
    const users = JSON.parse(localStorage.getItem('user')) || {};
    const {name, email,phone, address} = users;
    console.log(users)
    
  return (
    <>
    <Navbar/>
 <div className="profile-container">
 <div className="profile-circle"><FaRegUserCircle /></div>
            <h1 className="profile-header">{users.name} Profile</h1>
            <div className="profile-    ">
                <div className="profile-field">
                    <strong>Name: </strong> {users.name || 'nahi aaunga'}
                </div>
                <div className="profile-field">
                    <strong>Email: </strong> {users.email || 'nahi aaunga'}
                </div>
                Update profile 
                <div className="profile-update">
                    
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Profile