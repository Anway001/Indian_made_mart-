import { useState } from 'react'

import './App.css'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './Components/Navbar'
import Products from './pages/Products'
function App() {
 

  return (
    <>
     <div>
      <BrowserRouter>
    <Navbar />

      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/login' element = {<Login />}/>
        <Route path = '/signup' element = {<SignUp />}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/products' element = {<Products/>}/>

      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
