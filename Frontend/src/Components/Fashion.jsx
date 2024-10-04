import React from 'react'
import './Fashion.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Fashion() {
  return (
    <>
    <Navbar/>
    
    <div className="container">
        <h2 className="category-title">Fashion Category</h2>

        
        <div className="product-grid">
            <div className="product-card">
                <img src="https://via.placeholder.com/600x800" alt="Product 1"/>
                <h3>Stylish Dress</h3>
                <p>Elegant dress suitable for any occasion</p>
                <p className="price">$79.99</p>
                <button className="add-to-cart-btn" onclick="addToCart('Stylish Dress')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://via.placeholder.com/600x800" alt="Product 2"/>
                <h3>Casual Jeans</h3>
                <p>Comfortable and stylish denim for daily wear</p>
                <p className="price">$59.99</p>
                <button className="add-to-cart-btn" onclick="addToCart('Casual Jeans')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://via.placeholder.com/600x800" alt="Product 3"/>
                <h3>Leather Jacket</h3>
                <p>Trendy leather jacket for a bold look</p>
                <p className="price">$129.99</p>
                <button className="add-to-cart-btn" onclick="addToCart('Leather Jacket')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://via.placeholder.com/600x800" alt="Product 4"/>
                <h3>Casual Shirt</h3>
                <p>Lightweight cotton shirt, perfect for summer</p>
                <p className="price">$39.99</p>
                <button className="add-to-cart-btn" onclick="addToCart('Casual Shirt')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://via.placeholder.com/600x800" alt="Product 5"/>
                <h3>Formal Shoes</h3>
                <p>Premium leather shoes for a sophisticated look</p>
                <p className="price">$99.99</p>
                <button className="add-to-cart-btn" onclick="addToCart('Formal Shoes')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://via.placeholder.com/600x800" alt="Product 6"/>
                <h3>Summer Hat</h3>
                <p>Stylish summer hat to protect you from the sun</p>
                <p className="price">$19.99</p>
                <button className="add-to-cart-btn" onclick="addToCart('Summer Hat')">Add to Cart</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Fashion