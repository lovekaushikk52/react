import React from 'react'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Contact from './pages/Contact'
import Product from './pages/Product'
import About from './pages/About'
import {Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Navbar/>

      <div >
        <Routes>

         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/product' element={<Product/>} />

      </Routes>
      </div>
    </div>
  )
}

export default App
