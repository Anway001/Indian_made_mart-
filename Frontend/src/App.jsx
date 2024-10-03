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
        <Route path = '/Fashion' element = {<Fashion/>}/>
        
        

      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
