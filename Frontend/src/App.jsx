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
        
        
        

      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
