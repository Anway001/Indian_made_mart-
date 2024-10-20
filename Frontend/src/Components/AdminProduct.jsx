import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import './AdminProduct.css'


function AdminProduct() {
    const [products,setProduct]=useState([]);
    const [newproduct,setnewproduct]=useState({
        prod_name:"",
        prod_price:"",
        prod_desc:"",
        prod_stock:"",
        prod_category:"",
        prod_img:""
    });

    const [editproduct,seteditproduct]=useState(null);

    useEffect(()=>{
        fetchproducts();
    },[]);

    const fetchproducts=async()=>{
        try {
            const response = await fetch("http://localhost:8080/product");
        }catch(err){
            console.log(err);
        }
    }
    const handleAddProduct = async () => {
        try {
            const response = await fetch('http://localhost:8080/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newproduct),
            });
            await response.json();
            fetchproducts(); // Refresh products list
            setnewproduct({ prod_name: '', prod_price: '', prod_desc: '', prod_stock: '', prod_category: '', prod_img: '' }); // Clear input fields
        } catch (error) {
            console.error("Error adding product", error);
        }
    };

    const handleUpdateProduct = async (id) => {
        try {
            await axios.put(`/product/${id}`, newproduct);
            fetchproducts(); // Refresh products list
            seteditproduct(null); // Reset editing state
        } catch (error) {
            console.error("Error updating product", error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`/product/${id}`);
            fetchproducts(); // Refresh products list
        } catch (error) {
            console.error("Error deleting product", error);
        }
    };

    const handleInputChange = (e) => {
        setnewproduct({
            ...newproduct,
            [e.target.name]: e.target.value
        });
    };

  return (
    <div className="admin-products">
            <h2>Manage Products</h2>

            {/* Form for adding or editing products */}
            <div className="product-form">
                <input type="text" name="prod_name" value={newproduct.prod_name} onChange={handleInputChange} placeholder="Product Name" />
                <input type="number" name="prod_price" value={newproduct.prod_price} onChange={handleInputChange} placeholder="Price" />
                <input type="text" name="prod_desc" value={newproduct.prod_desc} onChange={handleInputChange} placeholder="Description" />
                <input type="number" name="prod_stock" value={newproduct.prod_stock} onChange={handleInputChange} placeholder="Stock" />
                <input type="text" name="prod_category" value={newproduct.prod_category} onChange={handleInputChange} placeholder="Category" />
                <input type="text" name="prod_img" value={newproduct.prod_img} onChange={handleInputChange} placeholder="Image URL" />
                
                {editproduct ? (
                    <button onClick={() => handleUpdateProduct(editproduct)}>Update Product</button>
                ) : (
                    <button onClick={handleAddProduct}>Add Product</button>
                )}
            </div>

            {/* Display list of products */}
            <div className="product-list">
                <h3>Current Products</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id}>
                                <td>{product.prod_name}</td>
                                <td>{product.prod_price}</td>``
                                <td>{product.prod_stock}</td>
                                <td>{product.prod_category}</td>
                                <td>
                                    <button onClick={() => {
                                        seteditproduct(product._id);
                                        setnewproduct(product);
                                    }}>Edit</button>
                                    <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default AdminProduct