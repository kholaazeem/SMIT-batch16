import React,{useContext} from 'react'
import { Counter } from '../context/CounterContext'


const Card = () => {
    const  {count,setCount,c} = useContext(Counter)
  return (
    <div style={{width:'100%',height:'90vh',backgroundColor:"#aaa"}}>
      

{c}

    </div>
  )
}

export default Card