import React, { useState } from 'react';
import './Profile.css';
import Navbar from './Navbar';
import { FaRegUserCircle } from "react-icons/fa";

function Profile() {
  const storedUser = JSON.parse(localStorage.getItem('user')) || {};
  const [user, setUser] = useState(storedUser);
  const [isEditing, setIsEditing] = useState(false);

  const { name, email, phone, address } = user;

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle form submission to update profile
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user)); // Update localStorage
    // Add backend API call here to update user in the database

    alert("Profile updated successfully");

    setIsEditing(false);
  };

  // Handle delete profile
  const handleDeleteProfile = () => {
    localStorage.removeItem('user');
    // Add backend API call here to delete user from the database
    alert("Profile deleted successfully");
    window.location.reload(); // Reload to clear the profile
  };

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-circle"><FaRegUserCircle /></div>
        <h1 className="profile-header">Hello {name || 'User'}</h1>

        <div className="profile-details">
          {!isEditing ? (
            <>
              <div className="profile-field">
                <strong>Name: </strong> {name || 'NOA'}
              </div>
              <div className="profile-field">
                <strong>Email: </strong> {email || 'NOA'}
              </div>
              <div className="profile-field">
                <strong>Phone: </strong> {phone || 'NOA'}
              </div>
              <div className="profile-field">
                <strong>Address: </strong> {address || 'NOA'}
              </div>
              <button className="btn-edit" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
              <button className="btn-delete" onClick={handleDeleteProfile}>
                Delete Profile
              </button>
            </>
          ) : (
            <form className="profile-update-form" onSubmit={handleUpdateProfile}>
              <div className="profile-field">
                <strong>Name: </strong>
                <input 
                  type="text" 
                  name="name" 
                  className='profile-input'
                  value={name} 
                  onChange={handleInputChange} 
                  required
                />
              </div>
              <div className="profile-field">
                <strong>Email: </strong>
                <input 
                  type="email" 
                  name="email" 
                   className='profile-input'
                  value={email} 
                  onChange={handleInputChange} 
                  required
                />
              </div>
              <div className="profile-field">
                <strong>Phone: </strong>
                <input 
                  type="text" 
                  name="phone" 
                   className='profile-input'
                  value={phone} 
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-field">
                <strong>Address: </strong>
                <input 
                  type="text" 
                  name="address" 
                   className='profile-input'
                  value={address} 
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn-update">Update Profile</button>
              <button 
                type="button" 
                className="btn-cancel" 
                onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
