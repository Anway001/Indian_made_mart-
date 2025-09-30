import React, { useState } from 'react';
import './Contact.css';
import Navbar from '../Components/Navbar';
import Footer  from '../Components/Footer';



const ContactUs = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    alert('Message sent!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
    <Navbar/>
    
    <div className="contact-container">
      <h1 className='contact-title'>Contact Us</h1>
      <p>We’re here to help you with all your water service needs!</p>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> anwaykharsamble@gmail.com</p>
        <p><strong>Address:</strong> Virar West , mumbai 401209</p>
        <p><strong>Business Hours:</strong> Mon-Fri, 9 AM - 5 PM</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="map-container">
        <h2>Our Location</h2>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509378!2d144.95373531531752!3d-37.81627997975118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1c9f63%3A0x50c6c5c132d4d2df!2sAqua%20Service!5e0!3m2!1sen!2sus!4v1617773438322!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <Footer/>

    </>
  );
};

export default ContactUs;
