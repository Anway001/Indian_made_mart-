import React from 'react';
import './Categories.css'; // Assuming you have a CSS file for styling

const Categories = () => {
  // Hardcoded categories
  const categories = ['Food', 'Clothing', 'Handicrafts', 'Home Decor', 'Jewelry'];

  return (
    // <!-- Categories -->
    <>
    <div className="category-container">
        <section className="categories">
            <h2>Shop by Category</h2>
            <div className="category-grid">
              <div className="category-card">
                <img src="images\fashion.jpg" alt="Fashion"/>
                <h3>Fashion</h3>
              </div>
              <div className="category-card">
                <img src="images\food.jpg" alt="Food"/>
                <h3>Food</h3>
              </div>
              <div className="category-card">
                <a href="./acc.html" target="_blank">
                    <div className="col-content">
                        <img src="images/acc.jpg" alt="Accessories"/>
                        <h3>Accessories</h3>
                    </div>
                </a>
              </div>
              <div className="category-card">
                <img src="images\decor.jpg" alt="Home Decor"/>
                <h3>Home Decor</h3>
              </div>
            </div>
          </section>
        </div>
        </>
  );
};

export default Categories;
