import React from 'react'
import './Food.css'
import Navbar from './Navbar'

function Food() {
  return (
    <>
    <Navbar/>
    <div className="wrapperr">
    <div className="container">
        <h2 classNameName="category-title">Food Category</h2>

        
        <div classNameName="product-grid">
            <div className="product-card">
                <img src="https://wallpaperaccess.com/full/767048.jpg" alt="Product 1"/>
                <h3>Pizza</h3>
                <p> Classic cheesy pizza topped with your favorite savory delights.
                </p>
                <p className="price">Rs 100</p>
                <button className="add-to-cart-btn" onclick="addToCart('Stylish Dress')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://th.bing.com/th/id/OIP.ftYyDUCbXleMsadFbsYDIgHaLH?rs=1&pid=ImgDetMain" alt="Product 2"/>
                <h3>Manchurian Balls</h3>
                <p>Crispy vegetable balls in a tangy Indo-Chinese gravy.</p>
                <p className="price">Rs 50</p>
                <button className="add-to-cart-btn" onclick="addToCart('Casual Jeans')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://th.bing.com/th/id/OIP.Hb_lNF0ZDfkNxGBwdqXAIQHaE8?rs=1&pid=ImgDetMain" alt="Product 3"/>
                <h3> Pavbhaji</h3>
                <p>Spicy mashed vegetable curry served with buttery pav, a street food favorite.
                </p>
                <p className="price">Rs 129</p>
                <button className="add-to-cart-btn" onclick="addToCart('Leather Jacket')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://th.bing.com/th/id/OIP.V5k-dp_llB4nOQs6X_bZlgHaHa?rs=1&pid=ImgDetMain" alt="Product 4"/>
                <h3> Puranpoli</h3>
                <p>Sweet and soft flatbread stuffed with spiced lentil filling.</p>
                <p className="price">Rs 200</p>
                <button className="add-to-cart-btn" onclick="addToCart('Casual Shirt')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://th.bing.com/th/id/OIP.SSU4a2sxC4uQTV9SDmLZkQHaEK?rs=1&pid=ImgDetMain" alt="Product 5"/>
                <h3>Modak</h3>
                <p> Traditional sweet dumplings filled with coconut and jaggery, perfect for festive cravings.</p>
                <p className="price">Rs 150</p>
                <button className="add-to-cart-btn" onclick="addToCart('Formal Shoes')">Add to Cart</button>
            </div>

            <div className="product-card">
                <img src="https://th.bing.com/th/id/R.397ad0987534c49d6cce3f94240e957f?rik=XB%2bbtzoXRolu2g&riu=http%3a%2f%2fwww.archanaskitchen.com%2fimages%2farchanaskitchen%2f1-Author%2fMadhuli_Ajay%2fRice_Bhakri.jpg&ehk=Ap76NDnB15gJ8DeJBPIwN7n1lKiy8ZUtt2yBYAnna8A%3d&risl=&pid=ImgRaw&r=0" alt="Product 6"/>
                <h3> Bhakri Chutney</h3>
                <p>Crispy millet flatbread paired with spicy chutney for a rustic taste.</p>
                <p className="price">Rs 190</p>
                <button className="add-to-cart-btn" onclick="addToCart('Summer Hat')">Add to Cart</button>
            </div>
        </div>
    </div>
    </div>

    
    </>    
)
}

export default Food