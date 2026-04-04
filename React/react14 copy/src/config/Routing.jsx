import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import MyHome from '../Pages/MyHome'
import CartPage from '../Pages/CartPage'
import Contact from '../Pages/Contact'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
  <Route path='/'  element={<MyHome/>}/>
  <Route path='/cart' element={<CartPage/>}/>
    <Route path='/contact' element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Routing