import { createContext,useState } from "react";




export const Counter = createContext()


import React from 'react'

const CounterContext = ({children}) => {
    const [count, setCount] = useState(2)
    const c = 'hello'
  return (
<Counter.Provider value={{count:count,setCount:setCount,c}}>
{children}
</Counter.Provider>
  )
}

export default CounterContext