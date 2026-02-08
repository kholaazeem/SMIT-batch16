import React, { useState } from 'react'

const ProductForm = ({setemail,setpassword,email,password}) => {
   

        const handleSubmit = (e)=>{
            e.preventDefault()
            console.log(email,password);
            
        }

  return (
    <div className='mt-4 w-1/2 bg-pink-50'>
        <h1 className='text-center text-4xl font-bold font-guides pt-4'> Product</h1>
        

<form onSubmit={handleSubmit} class="max-w-sm shadow-2xl p-5 mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Your email</label>
    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base  focus:outline-none focus:border-pink-800  block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password"class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
    <input type="password"  value={password} onChange={(e)=>setpassword(e.target.value)}  id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base  focus:outline-none focus:border-pink-800 block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
  </div>

  <button type="submit" class="text-white bg-[#d37878aa] rounded-xl box-border border border-transparent hover:border-pink-200 hover:bg-transparent hover:text-black focus:ring-4 focus:ring-pink-800  shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
</form>



    </div>
  )
}

export default ProductForm