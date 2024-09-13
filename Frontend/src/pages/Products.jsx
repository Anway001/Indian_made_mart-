import React from 'react'
import './Products.css'
import ProductsCard from '../Components/ProductsCard'

function Products() {
  return (
    <>
    <section className='heroproducts'>
        <div className='heroproducts__div'>
            <section>
                <h1>Products</h1>
                <input type="search bar " placeholder='Search for products'/>
                <button>search</button>
            </section>
            
        </div>
    </section>
    <section className='heroproducts__section'>
              <div>
                <h2>Popular Products </h2>
                <ProductsCard/>
              </div>
            </section>
    </>
  )
}

export default Products