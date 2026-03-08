import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchPro } from '../config/ProductSlice'



const CartPage = () => {
    const dipatch = useDispatch()
     const cart = useSelector((state)=>state.product)
   console.log(cart);
   
   useEffect(()=>{
     dipatch(fetchPro())
   
   },[])
   
     if(cart.loading){
          return <h1>loading</h1>
     }
    
  return (
  <div>Cart page</div>
  )
}

export default CartPage