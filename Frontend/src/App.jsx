import { useState } from 'react'

import './App.css'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './Components/Navbar'
import Products from './pages/Products'
import Fashion from './Components/Fashion'
import Food from './Components/Food'
import Acc from './Components/Acc'
import Decor from './Components/Decor'
import Profile from './Components/Profile'
import ProductPage from './Components/ProductPage'
import Admin from './pages/Admin'
import TestingContainer from './Components/TestingContainer'
import AdminProductPage from './pages/AdminProductPage'
import AdminCustomers from './Components/AdminCustomer'
import Cart from './Components/Cart'
function App() {
 

  return (
    <>
     <div>
      <BrowserRouter>
    

      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/signup' element = {<SignUp />}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/products' element = {<Products/>}/>
        <Route path = '/profile' element = {<Profile/>}/>
        <Route path = '/fashion' element = {<Fashion/>}/>
        <Route path = '/food' element = {<Food/>}/>
        <Route path = '/Accessories' element = {<Acc/>}/>
        <Route path = '/Homedecor' element = {<Decor/>}/>
        <Route path = '/productpage' element = {<ProductPage/>}/>
        <Route path = '/admin' element = {<Admin/>}/>
        <Route path = '/testing' element = {<TestingContainer/>}/>
        <Route path = '/adminproduct' element = {<AdminProductPage/>}/>
        <Route path = '/admincustomer' element = {<AdminCustomers/>}/>
        <Route path = '/cart' element = {<Cart/>}/>

        
        
        

      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
