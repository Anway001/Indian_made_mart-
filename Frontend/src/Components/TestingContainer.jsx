import React,{useState, useEffect} from 'react'
import TestingCard from './TestingCard';
import axios from 'axios';

function TestingContainer() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/product'); // Update the API endpoint
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
  return (
    <div className="products-container">
    {products.map((product) => (
        <TestingCard key={product._id} product={product} />
    ))}
</div>
  )
}

export default TestingContainer