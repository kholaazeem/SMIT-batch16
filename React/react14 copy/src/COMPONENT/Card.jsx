import React from 'react'

const Card = ({title,desc,value,name}) => {
  return (
    <div className='flex gap-5 font-medium'>
        

        <h1 className='text-red-700 bg-purple-700'>{title}</h1>
        <p className='text-red-700'>{desc}</p>
        <button className='text-red-700'>{value}</button>
    </div>
  )
}

export default Card