import React, { useState,useEffect } from 'react'

const New = () => {

  const [pro,setPro] = useState ([])
  const [num ,setNum] = useState(10)


    const addData = () => {


    fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setPro(json))

    }

useEffect(()=>{
addData()
console.log('hi');

},[num])



    return (
        <div>
{pro.map((e)=>(
    <div>
        <h1>{e.title}</h1>
    </div>
))}
   <button onClick={()=>setNum(num + 10)}>click</button>
        </div>
    )
}

export default New