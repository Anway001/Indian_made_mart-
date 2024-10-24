import React,{useState, useEffect} from 'react'

function Cart() {

    const [cart , setCart] = useState([])
    useEffect(() => {
        // Retrieve the cart from local storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Fetch products based on cart IDs
        const fetchedProducts = products.filter(product => cart.includes(product.id));
        setCart(fetchedProducts);

    }, []);
  return (
    <div className="cart">
      <h2>Your Cart</h2>
    
      <div className="productGrid">
      {cart?.map(product => (
        <div className="productCard" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="productImage"
          />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <div className="buttonGroup">
            <button className='buyButton'>BUY</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Cart