import React from 'react'
import './Products.css'
import ProductsCard from '../Components/ProductsCard'
import Catimage from '../Images/1.jpg'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'



function Products() {
  return (
    <>
    <Navbar />
    <section className='heroproducts'>
        <div className='heroproducts__div'>
            <section>
                <h1>Products</h1>
                <input className= 'searchbar1'type="search bar" placeholder='Search for products'/>
                <button className='searchbtn'>search</button>
            </section>
            
        </div>
    </section>
    
    <div>
      {/* categoires section */}
      <Categories/>
    </div>
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