import React,{useContext} from 'react'
import { Counter } from '../context/CounterContext'

const Home = () => {
    const counter = useContext(Counter)

    
  return (
    <>
    
    
    <div style={{width:'100%',height:'90vh',backgroundColor:"#aaa"}}>{counter.count}


        <button onClick={()=>counter.setCount(counter.count + 1)}>+</button>
    </div>
    
    </>
  )
}

export default Home