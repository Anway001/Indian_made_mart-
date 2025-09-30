import React from 'react';
import './ProductsCard.css'
import { useNavigate } from 'react-router-dom';
import Image from '../Images/1.jpg' 


function ProductCard() {
 const  navigate = useNavigate();




  return (

    
    
    <><div className='productContainer'>
       {/* <div className="product-card">
            <img src={product.prod_img} alt={product.prod_name} />
            <h3>{product.prod_name}</h3>
            <p>{product.prod_desc}</p>
            <p>${product.prod_price}</p>
            <button>Buy</button>
        </div> */}
          <div className="productCard">
            <img
              src="https://th.bing.com/th/id/OIP.TWzod5DNQVW28NpT-1GYZQHaHa?rs=1&pid=ImgDetMain"
              alt="Product 2"
              className="productImage"
            />
            <h3>Handwoven Rug</h3>
            <p>₹2500</p>
            <button className='buyButton'onClick={()=>  window.location.href = 'https://buy.stripe.com/test_28obKW7zr2568SI4gg' }>Buy </button>
          </div>
          <div className="productCard">
            <img
              src="https://th.bing.com/th/id/OIP.L2unyBkY_AGlYam2OShOgwHaHa?rs=1&pid=ImgDetMain"
              alt="Product 3"
              className="productImage"
            />
            <h3>Terracotta Pottery</h3>
            <p>₹950</p>
            <button className='buyButton' onClick={()=>  window.location.href = 'https://buy.stripe.com/test_3cs5my6vnh006KA6oq' }>Buy </button>
          </div>
          <div className="productCard">
            <img
              src="https://4.imimg.com/data4/II/AJ/MY-7980527/peacock-brass-handicraft-500x500.jpg"
              alt="Product 1"
              className="productImage"
            />
            <h3>Brass Handicraft</h3>
            <p>₹500</p>
            <button className='buyButton' onClick={()=> window.location.href = 'https://buy.stripe.com/test_cN22ambPHdNO3yo6op'}>BUY</button>
          </div>
          
          </div>
    </>
  );
}

export default ProductCard;
