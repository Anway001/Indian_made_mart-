import React from 'react';
import { BrowserRouter,Link,Route, Routes} from 'react-router-dom';
import './Categories.css'; // Assuming you have a CSS file for styling
import Fashion from './Fashion';
import food from '../Images/food.jpg'
import fashion from '../Images/fashion.jpg'
import accessories from '../Images/acc.jpg'
import decor from '../Images/decor.jpg'



const Categories = () => {
  // Hardcoded categories
  

  return (
    // <!-- Categories -->
    <>
    <div className="category-container">
        <section className="categories">
            <h2>Shop by Category</h2>
            
            
            <div className="category-grid" >
              <div className="category-card">
                <Link to="/fashion">
                <img src={fashion} alt="Fashion"/>
                <h3>Fashion</h3>
                </Link>
              </div>
              <div className="category-card">
               <Link to="/food">
                <img src={food} alt="Food"/>
                <h3>Food</h3>
                </Link>
              </div>
              <div className="category-card">
                
                    <div className="col-content">
                      <Link to="/Accessories">
                        <img src={accessories} alt="Accessories"/>
                        <h3>Accessories</h3>
                        </Link>
                    </div>
              </div>
              <div className="category-card">
                <Link to="/HomeDecor">
              <img src={decor} alt="Home Decor"/>
                <h3>Home Decor</h3>
                </Link>
              </div>
            </div>
          </section>
        </div>
        </>
  );
};

export default Categories;
