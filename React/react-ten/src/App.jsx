import { useState } from 'react'
import { Counter } from './context/CounterContext'
import './App.css'
import Home from './components/Home'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
    <Counter.Provider  value={{count,setCount}} >

    <Home/>
    <Card/>
    </Counter.Provider>
    </>
  )
}

export default App
