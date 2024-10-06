import React from 'react'
import Navbar from './Navbar'

function Decor() {
  return (
    <>
    <Navbar/>
    <div className="container">
        <h2 className="category-title">Home decor Category</h2>

        
        <div className="product-grid">
            <div className="product-card">
                <img src="https://i.pinimg.com/564x/92/f6/cd/92f6cd92965e52d180efdea08844bb93.jpg" alt="Product 1"/>
                <h3>Bicycle Key Holder</h3>
                <p>A wooden key holder featuring a bicycle design and the words "Enjoy the Ride."</p>
                <p className="price">Rs 79</p>
                <button className="add-to-cart-btn" onclick="addToCart('Stylish Dress')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://i.pinimg.com/564x/70/40/c8/7040c8a0191049adf3835bb5aa52d4df.jpg" alt="Product 2"/>
                <h3>Peacock Wall Art</h3>
                <p>A vibrant handmade peacock decoration, perfect for adding a touch of elegance to your home.</p>
                <p className="price">Rs 590</p>
                <button className="add-to-cart-btn" onclick="addToCart('Casual Jeans')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://i.pinimg.com/564x/ed/87/e2/ed87e270d5aa523512641bf1e359b8c9.jpg" alt="Product 3"/>
                <h3>Diwali Hanging Toran</h3>
                <p>Traditional decorative piece for Diwali</p>
                <p className="price">Rs 129</p>
                <button className="add-to-cart-btn" onclick="addToCart('Leather Jacket')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://i.pinimg.com/564x/8a/1e/db/8a1edb3fe7f4cd817b735a7e01bab2e6.jpg" alt="Product 4"/>
                <h3>Lippan Wall Decor</h3>
                <p>Traditional fine art of Rajasthan and Gujarat's desert regions.</p>
                <p className="price">Rs 390</p>
                <button className="add-to-cart-btn" onclick="addToCart('Casual Shirt')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://i.pinimg.com/564x/e1/4d/49/e14d49212b90493d85c5ef0b9f890f94.jpg" alt="Product 5"/>
                <h3>Ring holder made of Spoons</h3>
                <p>Unique ring holder designed with spoons, perfect for a traditional touch.</p>
                <p className="price">Rs 990</p>
                <button className="add-to-cart-btn" onclick="addToCart('Formal Shoes')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://i.pinimg.com/564x/4f/87/ea/4f87ead49045a0bc138a16f2fd31615f.jpg" alt="Product 6"/>
                <h3>Mirror Work</h3>
                <p>A beautiful illustration of peacocks adorned with intricate mirror work embroidery.</p>
                <p className="price">Rs 200</p>
                <button className="add-to-cart-btn" onclick="addToCart('Summer Hat')">Add to Cart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Decor