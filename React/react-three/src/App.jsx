import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NavbarMy from './components/Navbar'

function App() {
// const a = 10
// function myValue (c){
// console.log(c);


// }


  return (
    <>
    {/* <Home value={a}  myValue= {myValue}/> */}
    <NavbarMy/>
    <Hero/>
    </>
  )
}

export default App
