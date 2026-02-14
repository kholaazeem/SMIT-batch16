import React,{useContext} from 'react'
import { Counter } from '../context/CounterContext'


const Card = () => {
    const  {count,setCount} = useContext(Counter)
  return (
    <div style={{width:'100%',height:'90vh',backgroundColor:"#aaa"}}>
<p>{count}</p>
 <button onClick={()=>setCount(count - 1)}>-</button>


    </div>
  )
}

export default Card