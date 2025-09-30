import React,{useEffect,useState} from 'react';
import Navbar from '../Components/Navbar';
import { Link,useNavigate } from 'react-router-dom';
import './Home.css'; // Importing the Home CSS
import axios from 'axios';
import ProductCard from '../Components/ProductsCard';
import '../Components/ProductsCard.css'
import Footer from '../Components/Footer';



const Home = () => {
  const navigate = useNavigate();


  const [products, setProducts] = useState([]);

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}product`); // Update the API endpoint
              setProducts(response.data);
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };

      fetchProducts();
  }, []);

  return (
    <div>
     <Navbar />

      <section className="heroSection">
        <div className="heroContent">
          <h2 className="heroTitle">Celebrate Indian Craftsmanship</h2>
          <p className="heroText">
            Explore high-quality, locally made products from artisans across India. 
            Support small businesses, discover unique finds, and shop proudly Indian-made!
          </p>
          {/* background image */}


          <button className="heroButton" onClick={() => navigate('/products')}>Shop Now</button>
        </div>
        
      </section>

      <section className="featuredProductsSection">
        <h2>Featured Products</h2>
        <div className="productGrid">
          <div className="productCard">
            <img
              src="https://4.imimg.com/data4/II/AJ/MY-7980527/peacock-brass-handicraft-500x500.jpg"
              alt="Product 1"
              className="productImage"
            />
            <h3>Brass Handicraft</h3>
            <p>₹500</p>
            <button className='buyButton' onClick={()=> window.location.href = 'https://buy.stripe.com/test_cN22ambPHdNO3yo6op'}>BUY</button>
          </div>
          <div className="productCard">
            <img
              src="https://th.bing.com/th/id/OIP.TWzod5DNQVW28NpT-1GYZQHaHa?rs=1&pid=ImgDetMain"
              alt="Product 2"
              className="productImage"
            />
            <h3>Handwoven Rug</h3>
            <p>₹2500</p>
            <button className='buyButton' onClick={()=> window.location.href = 'https://buy.stripe.com/test_28obKW7zr2568SI4gg'}>BUY</button>
          </div>
          <div className="productCard">
            <img
              src="https://th.bing.com/th/id/OIP.L2unyBkY_AGlYam2OShOgwHaHa?rs=1&pid=ImgDetMain"
              alt="Product 3"
              className="productImage"
            />
            <h3>Terracotta Pottery</h3>
            <p>₹950</p>
            <button className='buyButton' onClick={()=> window.location.href = 'https://buy.stripe.com/test_3cs5my6vnh006KA6oq'}>BUY</button>
          </div>

          {/* <div>

          {products.map((product) => (
        <ProductCard key={product._id} product={product} />
         ))}
          </div> */}


        </div>



      </section>

      <section className="aboutSection">
        <h2>About IndianMadeMart</h2>
        <p>
          IndianMadeMart is more than just an e-commerce platform. We are committed to showcasing the rich cultural heritage of India by offering
          high-quality, locally crafted products. Our mission is to empower artisans, small businesses, and manufacturers by giving them a global
          platform to sell their creations.
        </p>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;
