import React from 'react'
import './ProductPage.css'
import axios from 'axios'



function ProductPage() {


  return (
    <>
    <div class="product-container">
            <div class="product-images">
                <img src="product-image.jpg" alt="Product Image" id="main-image"/>
                <div class="thumbnail-images">
                    <img src="product-image1.jpg" alt="Thumbnail 1" onclick="changeImage('product-image1.jpg')"/>
                    <img src="product-image2.jpg" alt="Thumbnail 2" onclick="changeImage('product-image2.jpg')"/>
                    <img src="product-image3.jpg" alt="Thumbnail 3" onclick="changeImage('product-image3.jpg')"/>
                </div>
            </div>

            <div class="product-details">
                <h2>Product Title</h2>
                <p class="price" id="price">$99.99</p>
                <p class="rating">★★★★★</p>
                <p class="description">This is a great product that offers exceptional features and quality.</p>
                <img src="images\fashion.jpg" alt="Seller image" class="seller-images" />

                <div class="order-form">
                    {/* <!-- Quantity Input --> */}
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="1" value="1" onchange="updatePrice()"/>
                
                    {/* <!-- Display Total Price --> */}
                    <p class="total-price">Total Price: <span id="total-price">$99.99</span></p>
                
                   
                </div>

                <div class="order-form">
                    {/* <!-- Customer Details --> */}
                    <label for="customer-name">Name:</label>
                    <input type="text" id="customer-name" name="customer-name" placeholder="John Doe" required/>
                    
                    <label for="customer-email">Email:</label>
                    <input type="email" id="customer-email" name="customer-email" placeholder="email@example.com" required/>
                    
                    <label for="customer-phone">Phone Number:</label>
                    <input type="tel" id="customer-phone" name="customer-phone" placeholder="+1 234 567 890" required/>

                    {/* <!-- Payment Methods --> */}
                    <div class="payment-methods">
                        <label for="payment-method">Payment Method:</label>
                        <select id="payment-method" name="payment-method" required>
                            <option value="credit-card">Credit Card</option>
                            <option value="paypal">PayPal</option>
                            <option value="cod">Cash on Delivery</option>
                        </select>
                    </div>

                    {/* <!-- Credit Card Payment Details --> */}
                    <div class="payment-details credit-card-details">
                        <label for="cc-name">Name on Card:</label>
                        <input type="text" id="cc-name" name="cc-name" placeholder="John Doe" required/>
                        
                        <label for="cc-number">Card Number:</label>
                        <input type="text" id="cc-number" name="cc-number" placeholder="1111-2222-3333-4444" required/>
                        
                        <label for="cc-expiration">Expiration Date:</label>
                        <input type="text" id="cc-expiration" name="cc-expiration" placeholder="MM/YY" required/>
                        
                        <label for="cc-cvv">CVV:</label>
                        <input type="text" id="cc-cvv" name="cc-cvv" placeholder="123" required/>
                    </div>

                    {/* <!-- PayPal Payment Details --> */}
                    <div class="payment-details paypal-details">
                        <label for="paypal-email">PayPal Email:</label>
                        <input type="email" id="paypal-email" name="paypal-email" placeholder="email@example.com" required/>
                    </div>

                    <button type="button" class="add-to-cart" onclick="addToCart()">Add to Cart</button>
                    <button type="button" class="purchase" onclick="purchase()">Purchase</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductPage