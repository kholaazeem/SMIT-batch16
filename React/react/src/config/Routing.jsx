import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Hero from '../components/Hero'
import Contact from '../Pages/Contact'
import About from '../Pages/About'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
  <Route path='/'  element={<Hero/>}/>
  <Route path='/contact' element={<Contact/>}/>
    <Route path='/cd' element={<About/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Routing