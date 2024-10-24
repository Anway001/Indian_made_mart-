import React from 'react';
import './Admin.css';
import AdminProduct from '../Components/AdminProduct';

function Admin() {
    return (
        <div className="containeradmin">
            {/* Sidebar */}
            <aside>
                <div className="top">
                    <div className="logo">
                        <h3>Admin Panel</h3>
                    </div>
                </div>
                <div className="sidebar">
                    <a href="#" className="active">
                        <span className="icon">🏠</span>
                        <h3>Dashboard</h3>
                    </a>
                    <a href="#">
                        <span className="icon">💼</span>
                        <h3>Orders</h3>
                    </a>
                    <a href="/adminproduct">
                        <span className="icon">📦</span>
                        <h3>Products</h3>
                    </a>
                    <a href="/admincustomer">
                        <span className="icon">👥</span>
                        <h3>Customers</h3>
                    </a>
                    <a href="#">
                        <span className="icon">📧</span>
                        <h3>Messages</h3>
                        <span className="message-count">26</span>
                    </a>
                    <a href="#">
                        <span className="icon">⚙️</span>
                        <h3>Settings</h3>
                    </a>
                    <a href="#">
                        <span className="icon">🔓</span>
                        <h3>Logout</h3>
                    </a>
                </div>
            </aside>

            {/* Main Dashboard */}
            <main>
                <div className="date">
                    <input type="date" />
                    
                </div>

                {/* Insights */}
                <div className="insights">
                    <div className="sales">
                        <span>💰</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Sales</h3>
                                <h1>$25,024</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>81%</p>
                                </div>
                            </div>
                            
                        </div>
                        
                        <small>Last 24 Hours</small>
                    </div>
                    <div className="expenses">
                        <span>🛍️</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Expenses</h3>
                                <h1>$14,160</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>62%</p>
                                </div>
                            </div>
                        </div>
                        <small>Last 24 Hours</small>
                    </div>
                    <div className="income">
                        <span>📈</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Income</h3>
                                <h1>$10,864</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>44%</p>
                                </div>
                            </div>
                        </div>
                        <small>Last 24 Hours</small>
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="recent-orders">
                    <h2>Recent Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Payment Status</th>
                                <th>Shipping</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Foldable Mini Drone</td>
                                <td>$799</td>
                                <td>Due</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <td>Foldable Mini Drone</td>
                                <td>$799</td>
                                <td>Paid</td>
                                <td>Delivered</td>
                            </tr>
                            <tr>
                                <td>Foldable Mini Drone</td>
                                <td>$799</td>
                                <td>Due</td>
                                <td>Pending</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#">Show All</a>
                </div>
             
            </main>
{/* 
            Right Section */}
            {/* <div className="right">
                <div className="top">
                    <div className="profile">
                        <div className="profile-photo">
                            <img src="profile.jpg" alt="profile" />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Admin;
