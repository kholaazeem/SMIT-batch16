import React, { useState,useEffect } from 'react'
import Navbar from '../COMPONENT/Navbar'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from '../config/CartSlice'
import { fetchPro } from '../config/ProductSlice'
import CartPage from './CartPage'

const MyHome = () => {
 const dipatch = useDispatch()
  const cart = useSelector((state)=>state.product)
console.log(cart);

useEffect(()=>{
  dipatch(fetchPro())

},[])

  if(cart.loading){
       return <h1>loading</h1>
  }
  // if(cart.products){
  //   console.log(products);
    
  // }

  //   const products = [
  // {
  //   id: 1, name: "Wireless Headphones", category: "Electronics", price: 99.99, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400", description: "High-quality sound with noise cancellation."
  // },{
  //   id: 2, name: "Minimalist Watch", category: "Accessories", price: 149.50, imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400", description: "Sleek design for daily wear."
  // },{
  //   id: 3, name: "Coffee Mug", category: "Kitchenware", price: 15.00, imageUrl: "https://images.unsplash.com/photo-1517256078837-7729177f1138?q=80&w=400", description: "Ceramic mug, 12oz."
  // },{
  //   id: 4, name: "Leather Backpack", category: "Fashion", price: 79.99, imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400", description: "Genuine leather, fits 15-inch laptop."
  // }
 
  
// ]
const handleClick =(id,name)=>{
  dipatch(addToCart({id,name}))
}


  return (
    <div>
        <Navbar/>
 <div className="grid grid-cols-3 mx-auto max-w-7xl gap-2">
{cart.products.map((e)=>(
        <div key={e.id} class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
  <img class="w-full h-48 object-cover" src={e.imageUrl} alt="Card Image"/>
  <div class="p-5">
    <h5 class="text-xl font-bold tracking-tight text-gray-900 mb-2">{e.name}</h5>
    <p class="text-gray-600 text-base mb-4">
     {e.description}
    </p>
    <p class="text-green-600 text-base mb-4">
     {e.price}
    </p>
    <button onClick={()=>handleClick(e.id,e.name)} class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
      add to cart
    </button>
  </div>

</div>
)
)}

 </div>
  
    </div>
  )
}

export default MyHome