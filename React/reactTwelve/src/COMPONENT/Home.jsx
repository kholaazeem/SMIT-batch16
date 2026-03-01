import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from '../config/CounterSlice'

const Home = () => {

    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    
    const handleClick = ()=>{
      
      
   dispatch(increment())
    }

    
  return (
    <>
    <div>{count}</div>
    <button onClick={handleClick}>+ </button>
     <button onClick={()=> dispatch(decrement())}>- </button>
    </>
    )
}

export default Home