import React from 'react'
import Card from '../COMPONENT/Card'

const MyHome = () => {
  const products = [{
    title:'hello1',
    desc:'lskdfhjksdfh',
    value :'check'
  },
  {
    title:'hello2',
    desc:'lskdfhjksdfh',
    value :'check'
  },
  {
    title:'hello3',
    desc:'lskdfhjksdfh',
    value :'check'
  },
  {
    title:'hello4',
    desc:'lskdfhjksdfh',
    value :'check'
  },
]
  return (
    <div>
    {products.map((elm,inde)=>(
<Card  title={elm.title} desc={elm.desc} value={elm.value}/>
    ))}
    
    </div>
  )
}

export default MyHome