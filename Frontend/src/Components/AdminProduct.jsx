import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminProduct.css';

function AdminProduct() {
    const [products, setProduct] = useState([]);
    const [newProduct, setNewProduct] = useState({
        prod_name: '',
        prod_price: '',
        prod_desc: '',
        prod_stock: '',
        prod_img: '',
        prod_category: '',
    });
    const [imageFile, setImageFile] = useState(null);
    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/product'); // Changed to GET request
            setProduct(response.data); // Directly accessing response data
        } catch (err) {
            console.log(err);
        }
    };

    const handleAddProduct = async () => {
        try {
            const formData = new FormData();
            formData.append('prod_name', newProduct.prod_name);
            formData.append('prod_price', newProduct.prod_price);
            formData.append('prod_desc', newProduct.prod_desc);
            formData.append('prod_stock', newProduct.prod_stock);
            if (imageFile) {
                formData.append('prod_img', imageFile);
            }
            formData.append('prod_category', newProduct.prod_category);

            const response = await axios.post('http://localhost:8080/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                console.log('Product added successfully:', response.data);
                fetchProducts(); // Refresh products list
                setNewProduct({ prod_name: '', prod_price: '', prod_desc: '', prod_stock: '', prod_category: '' });
                setImageFile(null);
            } else {
                console.error('Failed to add product:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding product', error);
        }
    };

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleInputChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
    };

    const handleDeleteProduct = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/product/${id}`); // Make sure you have this endpoint set up
            if (response.status === 200) {
                console.log('Product deleted successfully');
                fetchProducts(); // Refresh products list
            } else {
                console.error('Failed to delete product:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    return (
        <div className="admin-products">
            <h2>Manage Products</h2>

            <div className="product-form">
                <input
                    type="text"
                    name="prod_name"
                    value={newProduct.prod_name}
                    onChange={handleInputChange}
                    placeholder="Product Name"
                />
                <input
                    type="number"
                    name="prod_price"
                    value={newProduct.prod_price}
                    onChange={handleInputChange}
                    placeholder="Price"
                />
                <input
                    type="text"
                    name="prod_desc"
                    value={newProduct.prod_desc}
                    onChange={handleInputChange}
                    placeholder="Description"
                />
                <input
                    type="number"
                    name="prod_stock"
                    value={newProduct.prod_stock}
                    onChange={handleInputChange}
                    placeholder="Stock"
                />
                <input
                    type="text"
                    name="prod_category"
                    value={newProduct.prod_category}
                    onChange={handleInputChange}
                    placeholder="Category"
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                />
                
                {editProduct ? (
                    <button onClick={() => handleUpdateProduct(editProduct)}>Update Product</button>
                ) : (
                    <button onClick={handleAddProduct}>Add Product</button>
                )}
            </div>

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
                        {products.map((product1) => (
                            <tr key={product1._id}>
                                <td>{product1.prod_name}</td>
                                <td>{product1.prod_price}</td>
                                <td>{product1.prod_stock}</td>
                                <td>{product1.prod_category}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            setEditProduct(product1._id);
                                            setNewProduct(product1);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button onClick={() => handleDeleteProduct(product1._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminProduct;
