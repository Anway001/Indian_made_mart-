import React, { useState, useEffect } from 'react';
import './AdminCustomer.css';
import axios from 'axios';

const AdminCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const [editingCustomer, setEditingCustomer] = useState(null);
    
    // Fetch customers
    const fetchCustomers = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}user`);
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers', error);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Add new customer or update existing one
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingCustomer) {
                // Update existing customer
                await axios.put(`${import.meta.env.VITE_API_BASE_URL}user/profile/${editingCustomer._id}`, formData);
                alert('Customer updated successfully!');
            } else {
                // Add new customer
                await axios.post(`${import.meta.env.VITE_API_BASE_URL}user`, formData);
                alert('Customer added successfully!');
            }

            setFormData({ name: '', email: '', phone: '', address: '' });
            setEditingCustomer(null);
            fetchCustomers(); // Fetch the updated list without reloading the page
        } catch (error) {
            console.error('Error saving customer', error);
        }
    };

    // Edit customer
    const handleEdit = (customer) => {
        setEditingCustomer(customer);
        setFormData({
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            address: customer.address
        });
    };

    // Delete customer
    const handleDelete = async (customerId) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_BASE_URL}user/${customerId}`);
            alert('Customer deleted successfully!');
            fetchCustomers(); // Fetch the updated list after deletion
        } catch (error) {
            console.error('Error deleting customer', error);
        }
    };

    return (
        <div className="admin-container">
            <h2>Manage Customers</h2>

            {/* Add / Update Customer Form */}
            <form onSubmit={handleSubmit} className="customer-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                <button type="submit">
                    {editingCustomer ? 'Update Customer' : 'Add Customer'}
                </button>
            </form>

            {/* List of Customers */}
            <div className="customers-list">
                <h3>All Customers</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer._id}>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.address}</td>
                                <td>
                                    <button onClick={() => handleEdit(customer)}>Edit</button>
                                    <button onClick={() => handleDelete(customer._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminCustomers;
