import React from 'react'


const Hero = () => {
  return (
    <div className='w-full h-screen  flex flex-col md:flex-row pt-10 sm:pt-2'>
        <div className='px-2 bg-[#287DB3]   w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex items-center justify-center'>
        <div className='text-center'>
 <h1 className=' font-bold mb-1 text-[50px] text-[#ed6b2e] hover:text-[#2ec300]  hover:bg-red-500 hover:transition-all  duration-1000 delay-300'>Lets build <span className='bg-black'> our </span> new store</h1>
<button type="button" class="text-white rounded-xl px-3 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600  focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-xl  py-2.5 text-center leading-5">Explore</button>
        </div>
        </div>
        <div className='px-2 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex items-center  justify-center'>
          <div className='shadow-xl border-t-2 border-t-[#aaaa]'><img src='./img.jpg' alt="" /></div></div>



    </div>
  )
}

export default Hero