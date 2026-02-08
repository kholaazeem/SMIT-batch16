import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Cards from './component/Cards'
import Hero from './component/Hero'
import Product from './component/Product'

function App() {
  

  return (
    <>
      {/* <div className='bg-red-300 flex'>
        <h3 className='bg-gray-200 flex-2'>hello</h3>
        <h3 className='bg-gray-200 flex-1 order-first'>hello2</h3>
      </div>
       */}
       {/* <Cards/> */}
       <Hero/>
       <Product/>
    </>
  )
}

export default App
