import { createSlice } from "@reduxjs/toolkit";

const allCarts =()=>{
    const data = localStorage.getItem("cartItems")
    return data ? JSON.parse(data) : []
}




const cartSlice = createSlice({
    name:"cart",
    initialState:{
   cartItem:allCarts()
    },
    reducers:{
        addToCart:(state,action)=>{
       state.cartItem.push({...action.payload,quantity:1})
       localStorage.setItem('cartItem',JSON.stringify(state.cartItem))
        }
    }
})



export const  {addToCart} = cartSlice.actions
export default cartSlice.reducer
