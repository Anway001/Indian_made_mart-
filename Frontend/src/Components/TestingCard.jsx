import React from 'react'



const TestingCard= ({product}) => {
    return (
        <div className="product-card">
            <img src={product.prod_img} alt={product.prod_name} />
            <h3>{product.prod_name}</h3>
            <p>{product.prod_desc}</p>
            <p>${product.prod_price}</p>
            <button>Add to Cart</button>
        </div>
  )
}

export default TestingCard