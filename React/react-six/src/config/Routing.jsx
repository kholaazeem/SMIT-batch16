import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Hero from '../components/Hero'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Product from '../Pages/Product'
import CustomNav from '../components/CustomNav'
import Navbar from '../components/Navbar'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
  <Route path='/'  element={<Navbar><Hero/></Navbar>}/>
  <Route path='/contact' element={<Navbar><Contact/></ Navbar>}/>
    <Route path='/about' element={<Navbar><About/></ Navbar>}/>
    <Route path='/product' element={<Navbar><Product/></ Navbar>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing