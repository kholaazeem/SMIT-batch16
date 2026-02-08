import React from 'react'

const Cards = () => {
  return (
    <div className='bg-gray-50 '>
{/* 
 <div className='bg-yellow-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1'> */}
 {/* <div className='flex flex-col sm:flex-row'> */}


 <div className='bg-yellow-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1'>
    <div className='bg-red-600 font-light sm:font-bold font-guides'>2</div>
    <div className='bg-blue-600 sm:bg-amber-800 md:bg-pink-400 font-blue lg:bg-purple-700'>3</div>
    <div className='bg-yellow-600'>4</div>
    <div className='bg-gray-600'>5</div>
    <div className='bg-purple-600 font-guides'>6</div>
 </div>

    </div>
  )
}

export default Cards