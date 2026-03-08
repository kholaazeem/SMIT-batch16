import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import MyHome from '../Pages/MyHome'
import CartPage from '../Pages/CartPage'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
  <Route path='/'  element={<MyHome/>}/>
  <Route path='/contact' element={<CartPage/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Routing