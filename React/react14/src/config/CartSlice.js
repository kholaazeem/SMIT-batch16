import { createSlice } from "@reduxjs/toolkit";

const allCarts =()=>{
    try{
const data = localStorage.getItem("cartItems")
    return data ? JSON.parse(data) : []
    }catch(er){
       return []
        
    }
    
}




const cartSlice = createSlice({
    name:"cart",
    initialState:{
   cartItem:allCarts()
    },
    reducers:{
        addToCart:(state,action)=>{
            console.log(action);
       const existing =  state.cartItem.find((item) => item.id == action.payload.id)


       if(existing){
        existing.quantity += 1
       }
       else{

       state.cartItem.push({...action.payload,quantity:1})
       }
          

       localStorage.setItem('cartItems',JSON.stringify(state.cartItem))
        },
        clearCart : (state)=>{
   state.cartItem = []
   localStorage.removeItem('cartItems')
        }
        
    }
})



export const  { addToCart,clearCart } = cartSlice.actions
export default cartSlice.reducer
