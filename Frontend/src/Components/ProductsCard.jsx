import React from 'react';
import './ProductsCard.css'
import Image from '../Images/1.jpg' 


function ProductCard({ name, description, price, image }) {
  return (
    
    <><div className='productContainer'>
       <div className="productCard">
            <img
              src="https://4.imimg.com/data4/II/AJ/MY-7980527/peacock-brass-handicraft-500x500.jpg"
              alt="Product 1"
              className="productImage"
            />
            <h3>Brass Handicraft</h3>
            <p>₹1800</p>
            <button className='buyButton'>BUY</button>
          </div>
          <div className="productCard">
            <img
              src="https://th.bing.com/th/id/OIP.TWzod5DNQVW28NpT-1GYZQHaHa?rs=1&pid=ImgDetMain"
              alt="Product 2"
              className="productImage"
            />
            <h3>Handwoven Rug</h3>
            <p>₹2500</p>
            <button className='buyButton'>View More</button>
          </div>
          <div className="productCard">
            <img
              src="https://th.bing.com/th/id/OIP.L2unyBkY_AGlYam2OShOgwHaHa?rs=1&pid=ImgDetMain"
              alt="Product 3"
              className="productImage"
            />
            <h3>Terracotta Pottery</h3>
            <p>₹950</p>
            <button className='buyButton'>View More</button>
          </div>
          
          </div>
    </>
  );
}

export default ProductCard;
