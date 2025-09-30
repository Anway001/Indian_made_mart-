// import React, { useState, useEffect } from 'react';
// import { Navigate, useNavigate,Link } from 'react-router-dom'
// import './Fashion.css'
// import Navbar from './Navbar'




// function Fashion() {
//    const Navigate = useNavigate()

   


//   return (
//     <>
//     <Navbar/>

    
    // <div className="container">
    //     <h2 className="category-title">Fashion Category</h2>

        
    //     <div className="product-grid" >
    //         <div className="product-card">
                
    //             <img src="https://i.pinimg.com/564x/44/fb/2b/44fb2bd3aa8fc052a3b9f46ffddbc7b7.jpg" alt="Product 1"/>
    //             <h3>Floral patchwork jacket</h3>
    //             <p>Floral jacket with plaid accents and ruffled collar.</p>
    //             <p className="price">₹ 790</p>
    //             <button className="add-to-cart-btn" onclick="addToCart('Stylish Dress')">Add to Cart</button>
               
    //         </div>
          

    //         <div className="product-card">
    //             <img src="https://i.pinimg.com/564x/6d/2c/ab/6d2cabced26398f963f3b697054abb18.jpg" alt="Product 2"/>
    //             <h3>Patchwork Dress</h3>
    //             <p>A casual dress featuring a black top with a mixed-pattern patchwork skirt.</p>
    //             <p className="price">₹ 592</p>
    //             <button className="add-to-cart-btn" onclick="addToCart('Casual Jeans')">Add to Cart</button>
    //         </div>

    //         <div className="product-card">
    //             <img src="https://i.pinimg.com/736x/ba/38/c1/ba38c1b469f9f2502b749a3d434e13e3.jpg" alt="Product 3"/>
    //             <h3>Floral Dress</h3>
    //             <p> A stylish garment with colorful flower patterns.</p>
    //             <p className="price">₹ 1290</p>
    //             <button className="add-to-cart-btn" onclick="addToCart('Leather Jacket')">Add to Cart</button>
    //         </div>

    //         <div className="product-card">
    //             <img src="https://i.pinimg.com/564x/7e/89/a7/7e89a769faba3910416637e6f3158d39.jpg" alt="Product 4"/>
    //             <h3>Green Patchwork Puffer Jacket</h3>
    //             <p>A stylish and warm jacket made from patchwork of green fabrics.</p>
    //             <p className="price">₹ 390</p>
    //             <button className="add-to-cart-btn" onclick="addToCart('Casual Shirt')">Add to Cart</button>
    //         </div>
    //         <div className="product-card">
    //             <img src="https://i.pinimg.com/564x/3a/e0/1c/3ae01cab43074db82e98fa6f641c5129.jpg" alt="Product 5"/>
    //             <h3>Quilted vest</h3>
    //             <p> A store featuring handmade clothing and accessories.</p>
    //             <p className="price">₹ 990</p>
    //             <button className="add-to-cart-btn" onclick="addToCart('Formal Shoes')">Add to Cart</button>
    //         </div>

    //         <div className="product-card">
    //             <img src="https://i.pinimg.com/564x/8d/0d/50/8d0d50278f4742efc194806816387097.jpg" alt="Product 6"/>
    //             <h3>Jacket</h3>
    //             <p>An outer garment typically worn for warmth, protection, or style.</p>
    //             <p className="price">₹ 500</p>
    //             <button className="add-to-cart-btn" onclick="addToCart('Summer Hat')">Add to Cart</button>
    //         </div>
    //         <div className="product-card">
    //             <img src="https://i.pinimg.com/564x/8d/0d/50/8d0d50278f4742efc194806816387097.jpg" alt="Product 6"/>
    //             <h3>Jacket</h3>
    //             <p>An outer garment typically worn for warmth, protection, or style.</p>
    //             <p className="price">₹ 500</p>
    //             <button className="add-to-cart-btn" onclick="addToCart('Summer Hat')">Add to Cart</button>
    //         </div>
    //     </div>
    // </div>
    
//     </>
//   )
// }

// export default Fashion


import React, { useState, useEffect } from 'react';
import './Fashion.css';
import Navbar from './Navbar';

const products = [
  {
    id: 19,
    name: "Floral Patchwork Jacket",
    price: "₹ 790",
    image: "https://i.pinimg.com/564x/44/fb/2b/44fb2bd3aa8fc052a3b9f46ffddbc7b7.jpg",
    description: "Floral jacket with plaid accents and ruffled collar.",
  },
  {
    id: 20,
    name: "Patchwork Dress",
    price: "₹ 592",
    image: "https://i.pinimg.com/564x/6d/2c/ab/6d2cabced26398f963f3b697054abb18.jpg",
    description: "A casual dress featuring a black top with a mixed-pattern patchwork skirt.",
  },
  {
    id: 21,
    name: "Floral Dress",
    price: "₹ 1290",
    image: "https://i.pinimg.com/736x/ba/38/c1/ba38c1b469f9f2502b749a3d434e13e3.jpg",
    description: "A stylish garment with colorful flower patterns.",
  },
  {
    id: 22,
    name: "Green Patchwork Puffer Jacket",
    price: "₹ 390",
    image: "https://i.pinimg.com/564x/7e/89/a7/7e89a769faba3910416637e6f3158d39.jpg",
    description: "A stylish and warm jacket made from patchwork of green fabrics.",
  },
  {
    id: 23,
    name: "Quilted Vest",
    price: "₹ 990",
    image: "https://i.pinimg.com/564x/3a/e0/1c/3ae01cab43074db82e98fa6f641c5129.jpg",
    description: "A store featuring handmade clothing and accessories.",
  },
  {
    id: 24,
    name: "Jacket",
    price: "₹ 500",
    image: "https://i.pinimg.com/564x/8d/0d/50/8d0d50278f4742efc194806816387097.jpg",
    description: "An outer garment typically worn for warmth, protection, or style.",
  },
];


function Fashion() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch fashion products from the backend
    fetch('http://localhost:8080/product') // Adjust the API endpoint to match your backend route
      .then(response => response.json())
      .then(data => setProducts(data))  
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (productName) => {
    console.log(`${productName} added to cart`);
  };

  const addTocart = (productId) => {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    if (!cart.includes(productId)) {

      cart.push(productId);
      
      
      localStorage.setItem('cart', JSON.stringify(cart));

      console.log(`Product ID ${productId} added to cart.`, cart);
    } else {
      console.log(`Product ID ${productId} is already in the cart.`);
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="category-title">Fashion Category</h2>

        
        <div className="product-grid" >
            <div className="product-card">
                
                <img src="https://i.pinimg.com/564x/44/fb/2b/44fb2bd3aa8fc052a3b9f46ffddbc7b7.jpg" alt="Product 1"/>
                <h3>Floral patchwork jacket</h3>
                <p>Floral jacket with plaid accents and ruffled collar.</p>
                <p className="price">₹ 790</p>
                <button className="add-to-cart-btn" onclick="addToCart('Stylish Dress')">Add to Cart</button>
               
            </div>
          

            <div className="product-card">
                <img src="https://i.pinimg.com/564x/6d/2c/ab/6d2cabced26398f963f3b697054abb18.jpg" alt="Product 2"/>
                <h3>Patchwork Dress</h3>
                <p>A casual dress featuring a black top with a mixed-pattern patchwork skirt.</p>
                <p className="price">₹ 592</p>
                <button className="add-to-cart-btn" onclick="addToCart('Casual Jeans')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://i.pinimg.com/736x/ba/38/c1/ba38c1b469f9f2502b749a3d434e13e3.jpg" alt="Product 3"/>
                <h3>Floral Dress</h3>
                <p> A stylish garment with colorful flower patterns.</p>
                <p className="price">₹ 1290</p>
                <button className="add-to-cart-btn" onclick="addToCart('Leather Jacket')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://i.pinimg.com/564x/7e/89/a7/7e89a769faba3910416637e6f3158d39.jpg" alt="Product 4"/>
                <h3>Green Patchwork Puffer Jacket</h3>
                <p>A stylish and warm jacket made from patchwork of green fabrics.</p>
                <p className="price">₹ 390</p>
                <button className="add-to-cart-btn" onclick="addToCart('Casual Shirt')">Add to Cart</button>
            </div>
            <div className="product-card">
                <img src="https://i.pinimg.com/564x/3a/e0/1c/3ae01cab43074db82e98fa6f641c5129.jpg" alt="Product 5"/>
                <h3>Quilted vest</h3>
                <p> A store featuring handmade clothing and accessories.</p>
                <p className="price">₹ 990</p>
                <button className="add-to-cart-btn" onclick="addToCart('Formal Shoes')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://i.pinimg.com/564x/8d/0d/50/8d0d50278f4742efc194806816387097.jpg" alt="Product 6"/>
                <h3>Jacket</h3>
                <p>An outer garment typically worn for warmth, protection, or style.</p>
                <p className="price">₹ 500</p>
                <button className="add-to-cart-btn" onclick="addToCart('Summer Hat')">Add to Cart</button>
            </div>
            
        </div>
        
    </div>
      
      <div className="container">
        {/* <h2 className="category-title">Fashion Category</h2> */}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
             <img src={`http://localhost:8080${product.prod_img}`} alt={product.prod_name} />
              <h3>{product.prod_name}</h3>
              <p>{product.prod_desc}</p>
              <p className="price">₹ {product.prod_price}</p>
              <button 
                className="add-to-cart-btn" 
                onClick={() => addToCart(product.prod_name)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Fashion;
