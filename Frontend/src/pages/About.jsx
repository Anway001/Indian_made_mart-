import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <>
    <Navbar />
    <section style={styles.section}>
      <h2>About Us</h2>
      <p>
        Welcome to <strong>Indian Made Mart </strong>, where innovation meets excellence. 
        Established in <strong>2024</strong>, our mission is to deliver top-notch products and 
        services that enhance your everyday life.
      </p>
      <p>
        At <strong>Indian Made Mart</strong>, we believe in the power of collaboration, creativity, and 
        continuous improvement. Our dedicated team of professionals works tirelessly to bring you 
        the best solutions, tailored to meet your unique needs.
      </p>
    </section>
    </>
  );
};

const styles = {
  section: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    margin: '20px 0',
  }
};

export default About;
