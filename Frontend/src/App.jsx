import { useState } from 'react'

import './App.css'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import About from './pages/About'
function App() {
 

  return (
    <>
     <div>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/login' element = {<Login />}/>
        <Route path = '/signup' element = {<SignUp />}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/about' element = {<About/>}/>

      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
