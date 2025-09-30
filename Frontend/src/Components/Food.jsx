import React from 'react'
import './Food.css'
import Navbar from './Navbar'


const products = [
    {
      id: 13,
      name: "Pizza",
      price: "₹ 100",
      image: "https://wallpaperaccess.com/full/767048.jpg",
      description: "Classic cheesy pizza topped with your favorite savory delights.",
    },
    {
      id: 14,
      name: "Manchurian Balls",
      price: "₹ 50",
      image: "https://th.bing.com/th/id/OIP.ftYyDUCbXleMsadFbsYDIgHaLH?₹=1&pid=ImgDetMain",
      description: "Crispy vegetable balls in a tangy Indo-Chinese gravy.",
    },
    {
      id: 15,
      name: "Pavbhaji",
      price: "₹ 129",
      image: "https://th.bing.com/th/id/OIP.Hb_lNF0ZDfkNxGBwdqXAIQHaE8?₹=1&pid=ImgDetMain",
      description: "Spicy mashed vegetable curry served with buttery pav, a street food favorite.",
    },
    {
      id: 16,
      name: "Puranpoli",
      price: "₹ 200",
      image: "https://th.bing.com/th/id/OIP.V5k-dp_llB4nOQs6X_bZlgHaHa?₹=1&pid=ImgDetMain",
      description: "Sweet and soft flatbread stuffed with spiced lentil filling.",
    },
    {
      id: 17,
      name: "Modak",
      price: "₹ 150",
      image: "https://th.bing.com/th/id/OIP.SSU4a2sxC4uQTV9SDmLZkQHaEK?₹=1&pid=ImgDetMain",
      description: "Traditional sweet dumplings filled with coconut and jaggery, perfect for festive cravings.",
    },
    {
      id: 18,
      name: "Bhakri Chutney",
      price: "₹ 190",
      image: "https://th.bing.com/th/id/R.397ad0987534c49d6cce3f94240e957f?rik=XB%2bbtzoXRolu2g&riu=http%3a%2f%2fwww.archanaskitchen.com%2fimages%2farchanaskitchen%2f1-Author%2fMadhuli_Ajay%2fRice_Bhakri.jpg&ehk=Ap76NDnB15gJ8DeJBPIwN7n1lKiy8ZUtt2yBYAnna8A%3d&risl=&pid=ImgRaw&r=0",
      description: "Crispy millet flatbread paired with spicy chutney for a rustic taste.",
    },
  ];
  
function Food() {
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
    <Navbar/>
    <div className="wrapperr">
    <div className="container">
        <h2 classNameName="category-title">Food Category</h2>

        
        {/* <div classNameName="product-grid">
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
        </div> */}
          
          <div className="product-grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="productImage"
          />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <div className="buttonGroup">
            
            <button onClick={()=>addTocart(product.id)} className='add-to-cart-btn'  >Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>

    
    </>    
)
}

export default Food