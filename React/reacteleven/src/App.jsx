import { useState } from 'react'
import CounterContext, { Counter } from './context/CounterContext'
import './App.css'
import Home from './components/Home'

import Card from './components/Card'
import AuthContext from './context/AuthContext'

function App() {


  return (
    <>
   <CounterContext>
    <AuthContext>

    <Home/>
    <Card/>
    </AuthContext>

    </CounterContext>
   
    </>
  )
}

export default App
