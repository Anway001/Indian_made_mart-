import React from 'react'
import './Acc.css'
import Navbar from './Navbar'

function Acc() {
  return (
    <>
    <Navbar/>
    <div className="container">
        <h2 className="category-title">Accessories Category</h2>

        
        <div className="product-grid">
            <div className="product-card">
                <img src="https://i.pinimg.com/564x/1b/3b/15/1b3b1537e3187815b67c61440eebb9d9.jpg" alt="Product 1"/>
                <h3>Madhubani Fish Necklace</h3>
                <p>A necklace featuring a hand-painted Madhubani-style fish pendant on a vibrant red cord.</p>
                <p className="price">Rs 79</p>
                <button className="add-to-cart-btn" onclick="addToCart('Stylish Dress')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://images.meesho.com/images/products/194362691/lfsss_512.webp" alt="Product 2"/>
                <h3>Bohemian Seashell Earrings</h3>
                <p>Red wooden disc earrings adorned with shells and metal accents, perfect for a beachy boho look.</p>
                <p className="price">Rs 59</p>
                <button className="add-to-cart-btn" onclick="addToCart('Casual Jeans')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://res.cloudinary.com/hamstech/images/w_864,h_648/f_auto,q_auto/v1646464937/Hamstech%20App/Handmade-Necklace/Handmade-Necklace.jpg?_i=AA" alt="Product 3"/>
                <h3>Bohemian Necklace</h3>
                <p>A colorful, handcrafted necklace with a mix of metal and fabric elements.</p>
                <p className="price">Rs 129</p>
                <button className="add-to-cart-btn" onclick="addToCart('Leather Jacket')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://phuljhadi.com/cdn/shop/files/0J7A0278copy_700x.jpg?v=1716021021" alt="Product 4"/>
                <h3>Phuljhadi Earrings</h3>
                <p>Vibrant, handcrafted beaded earrings with tassels.</p>
                <p className="price">Rs 390</p>
                <button className="add-to-cart-btn" onclick="addToCart('Casual Shirt')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://miro.medium.com/v2/resize:fit:1128/0*82TzNJuNuE0qASMo" alt="Product 5"/>
                <h3>Peacock Feather Earrings</h3>
                <p>Elegant earrings made with real peacock feathers and white beads.</p>
                <p className="price">Rs 200</p>
                <button className="add-to-cart-btn" onclick="addToCart('Formal Shoes')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://5.imimg.com/data5/ANDROID/Default/2022/1/JB/LG/KQ/33378158/product-jpeg-500x500.jpg" alt="Product 6"/>
                <h3>Handmade Silk Thread Jewellery Set</h3>
                <p> A beautiful set of necklace and earrings made with silk thread</p>
                <p className="price">Rs 190</p>
                <button className="add-to-cart-btn" onclick="addToCart('Summer Hat')">Add to Cart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Acc