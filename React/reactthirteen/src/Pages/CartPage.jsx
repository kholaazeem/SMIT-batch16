import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart } from '../config/CartSlice'


const CartPage = () => {
    const dis = useDispatch()
    const selector = useSelector((state=>state.cart.cartItem))
    console.log('cartpage=--->',selector);
    
  return (
    <div>CartPage
            <button
            onClick={()=>dis(clearCart())}
             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">clear cart</button>


        <div className='grid grid-cols-3 gap-3'>
            {selector.map((e)=>(
                        <div key={e.id} class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
 
  <div class="p-5">
    <h5 class="text-xl font-bold tracking-tight text-gray-900 mb-2">{e.name}</h5>
    <p class="text-gray-600 text-base mb-4">
     {e.name}
    </p>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">+</button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">-</button>
   
   
  </div>

</div>
            ))}
        </div>



    </div>
  )
}

export default CartPage